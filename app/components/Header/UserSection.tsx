'use client'
import PrimaryButton from '@/app/PrimaryButton/PrimaryButton'
import React from 'react'

export default function UserSection() {
  return (
    <div>
      <PrimaryButton width={5} onPress={() => console.log('in')}>
        Sign in
      </PrimaryButton>
    </div>
  )
}
