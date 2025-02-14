'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './Navbar.module.css'

interface Props {
  children: string
  href: string
}

export default function NavLink(props: Readonly<Props>) {
  const pathname = usePathname()

  return (
    <Link
      className={`${styles.navlink} ${
        pathname === props.href ? styles.active : ''
      }`}
      href={props.href}
    >
      {props.children}
    </Link>
  )
}
