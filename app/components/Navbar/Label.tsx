'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Label() {
  const pathname = usePathname()

  if (pathname === '/admin') return <p>| Admin</p>
  return ''
}
