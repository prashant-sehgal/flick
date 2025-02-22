import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function page() {
  return (
    <div className={styles.page}>
      <h3>
        We're cooking up something amazing! 🍿🔥 TV shows will be available
        soon—stay tuned!
      </h3>
      <Link href="/movies">Till then, enjoy our movies! 🎬✨</Link>
    </div>
  )
}
