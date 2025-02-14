'use client'
import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'
import { usePathname } from 'next/navigation'

interface Props {
  children: React.ReactNode
  href: string
  className?: string
}

export default function NavLink(props: Readonly<Props>) {
  const pathname = usePathname()
  return (
    <Link
      className={`${styles.navlink} ${
        props.href === pathname ? styles.active : ''
      } ${props.className}`}
      href={props.href}
    >
      {props.children}
    </Link>
  )
}
