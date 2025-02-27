'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import SignOut from './SignOut'
import SignIn from './SignIn'

export default function User() {
  const { data: session } = useSession()
  if (session) return <SignOut />
  return <SignIn />
}
