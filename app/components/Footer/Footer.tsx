import React from 'react'
import styles from './Footer.module.css'
import NavLink from '../Header/NavLink'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <NavLink href="/movies">
        <i className="ri-movie-fill"></i>
      </NavLink>
      <NavLink href="/shows">
        <i className="ri-tv-fill"></i>
      </NavLink>
      <NavLink href="/watchlist">
        <i className="ri-bookmark-3-fill"></i>
      </NavLink>
    </div>
  )
}
