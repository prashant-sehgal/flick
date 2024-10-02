'use client'
import React from 'react'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

export default function SignIn() {
  function handleSignIn() {}
  return (
    <PrimaryButton width={4} onPress={handleSignIn}>
      Sign In
    </PrimaryButton>
  )
}
