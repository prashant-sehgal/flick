'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from './Header.module.css'

interface Props {
  children: React.ReactNode
  href: string
  classname?: string
}

export default function NavLink(props: Readonly<Props>) {
  const pathname = usePathname()

  return (
    <Link
      className={`${styles.navlink} ${props.classname} ${
        props.href === pathname ? styles.active : ''
      }`}
      href={props.href}
    >
      {props.children}
    </Link>
  )
}
