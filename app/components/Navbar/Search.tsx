import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Search() {
  return (
    <Link className={styles.search} href="/search">
      <i className="ri-search-2-line"></i>
      <span className={styles.searchText}>Search</span>
    </Link>
  )
}
