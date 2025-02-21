import React from 'react'
import styles from './Footer.module.css'
import NavLink from './NavLink'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <NavLink href="/movies" icon="movie" />
      <NavLink href="/shows" icon="tv" />
      <NavLink href="/watchlist" icon="bookmark" />
    </div>
  )
}
