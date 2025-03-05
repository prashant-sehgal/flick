import React from 'react'
import BrandAnchor from './BrandAnchor'
import styles from './Header.module.css'
import NavList from './NavList'
import NavLink from './NavLink'
import User from './User'
import WatchlistLink from './WatchlistLink'

export default function Header() {
  return (
    <div className={styles.header}>
      <BrandAnchor />
      <NavList>
        <NavLink href="/movies">Movies</NavLink>
        <NavLink href="/shows">TV Shows</NavLink>
        <WatchlistLink />
        <NavLink href="/search" classname={styles.search}>
          <i className="ri-search-2-line"></i>
        </NavLink>
        <User />
      </NavList>
    </div>
  )
}
