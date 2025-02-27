import React from 'react'
import PrimaryAction from '../PrimaryAction/PrimaryAction'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  return (
    <PrimaryAction onPress={() => signIn('google')} width={5} height={2}>
      Sign In
    </PrimaryAction>
  )
}
