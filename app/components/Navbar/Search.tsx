import React from 'react'
import styles from './Navbar.module.css'

export default function Search() {
  return (
    <form className={styles.search}>
      <i className="ri-search-2-line"></i>
      <input type="text" placeholder="Explore movies, TV shows, actors..." />
    </form>
  )
}
