'use client'
import React from 'react'
import BrandAnchor from './BrandAnchor'
import styles from './Header.module.css'
import NavList from './NavList'
import NavLink from './NavLink'
import User from './User'

export default function Header() {
  return (
    <div className={styles.header}>
      <BrandAnchor />
      <NavList>
        <NavLink href="/movies">Movies</NavLink>
        <NavLink href="/shows">TV Shows</NavLink>
        <NavLink href="/watchlist">Watchlist</NavLink>
        <NavLink href="/search" classname={styles.search}>
          <i className="ri-search-2-line"></i>
        </NavLink>
        <User />
      </NavList>
    </div>
  )
}
