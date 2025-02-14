'use client'
import React from 'react'
import styles from './Header.module.css'
import BrandAnchor from './BrandAnchor'
import NavList from './NavList'
import NavLink from './NavLink'
import UserSection from './UserSection'

export default function Header() {
  return (
    <div className={styles.header}>
      <BrandAnchor />
      <NavList>
        <NavLink className={styles.wide} href="/movies">
          Movies
        </NavLink>
        <NavLink className={styles.wide} href="/shows">
          TV Shows
        </NavLink>
        <NavLink className={styles.wide} href="/watchlist">
          Watchlist
        </NavLink>
        <NavLink href="/search">
          <i className="ri-search-2-line"></i>
        </NavLink>
        <UserSection />
      </NavList>
    </div>
  )
}
