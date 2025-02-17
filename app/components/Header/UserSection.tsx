'use client'
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButton'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import EdgeButton from '../EdgeButton/EdgeButton'
import Image from 'next/image'

export default function UserSection() {
  const { data: session, status } = useSession()

  if (session && session.user && session.user.image)
    return (
      <EdgeButton
        width={5.5}
        height={2}
        onPress={() => signOut()}
        style={{ justifyContent: 'flex-start' }}
      >
        <Image src={session.user.image} alt="user-img" width={30} height={30} />
        Logout
      </EdgeButton>
    )

  return (
    <PrimaryButton width={5} onPress={() => signIn('google')}>
      Sign in
    </PrimaryButton>
  )
}
