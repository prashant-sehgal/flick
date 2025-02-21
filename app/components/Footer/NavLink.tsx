'use client'
import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'
import { usePathname } from 'next/navigation'

interface Props {
  href: string
  icon: string
}

export default function NavLink(props: Readonly<Props>) {
  const pathname = usePathname()
  const isActiveLink = props.href === pathname

  return (
    <Link
      href={props.href}
      className={`${styles.navlink} ${isActiveLink ? styles.active : ''}`}
    >
      <i className={`ri-${props.icon}-${isActiveLink ? 'fill' : 'line'}`}></i>
    </Link>
  )
}
