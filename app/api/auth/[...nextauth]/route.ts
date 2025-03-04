import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import jwt from 'jsonwebtoken'

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '',
      clientSecret: process.env.GOOGLE_SECRET || '',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  jwt: {
    async encode(params) {
      return jwt.sign(params.token! as jwt.JwtPayload, params.secret)
    },
    async decode(params) {
      return jwt.verify(params.token!, params.secret)! as any
    },
  },
  callbacks: {
    async signIn(params) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URI}/api/v1/users/signin`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sub: params.user.id, ...params.user }),
          }
        )
        const data = await response.json()
        return data.status === 'success'
      } catch (error: any) {
        throw new Error(error)
      }
    },
    async jwt(params) {
      params.token.exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30 // Expire in 30 days
      return params.token
    },
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
        path: '/',
        domain: 'railway.app',
      },
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
