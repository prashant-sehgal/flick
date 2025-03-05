'use client'
import React from 'react'
import NavLink from './NavLink'
import { useSession } from 'next-auth/react'

export default function WatchlistLink() {
  const { data: session } = useSession()

  if (!session?.user) return null

  return <NavLink href="/watchlist">Watchlist</NavLink>
}
