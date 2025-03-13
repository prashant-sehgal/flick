import Link from 'next/link'
import React from 'react'
import styles from './Header.module.css'

export default function BrandAnchor() {
  return (
    <Link className={styles.brandAnchor} href="/">
      FLICK
    </Link>
  )
}
