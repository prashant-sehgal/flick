import axios from 'axios'
import { useSession } from 'next-auth/react'

export default function useAPI() {
  const { data: session } = useSession()

  const client = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY} ${session?.user?.email}`,
    },
  })

  return { client }
}
