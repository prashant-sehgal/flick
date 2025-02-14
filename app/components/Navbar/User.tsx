'use client'
import React from 'react'
import PrimaryAction from '../widgets/PrimaryAction'
import { signIn, useSession } from 'next-auth/react'
import Avatar from './Avatar'

export default function User() {
  const { data: session } = useSession()

  function handleLogin() {
    signIn('google')
  }

  if (session?.user) return <Avatar />

  return (
    <PrimaryAction onPress={handleLogin} width={5}>
      Login
    </PrimaryAction>
  )
}
