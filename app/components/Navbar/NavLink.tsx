'use client'
import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'

interface Props {
  href: string
  children: string
}

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={`${styles.navlink} ${href === pathname ? styles.active : ''}`}
    >
      {children}
    </Link>
  )
}
