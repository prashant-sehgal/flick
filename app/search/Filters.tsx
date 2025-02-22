import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

export default function Filters() {
  return (
    <div className={styles.filters}>
      <Link href="?genre=action">Action</Link>
      <Link href="?genre=adventure">Adventure</Link>
      <Link href="?genre=sci-fi">Sci Fi</Link>
      <Link href="?genre=comdey">Comedy</Link>
      <Link href="?genre=fantasy">Fantasy</Link>
      <Link href="?genre=drama">Drama</Link>
    </div>
  )
}
