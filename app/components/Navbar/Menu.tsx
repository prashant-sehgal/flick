'use client'
import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { Spiral as Hamburger } from 'hamburger-react'
import Body from './Body'
import Search from './Search'
import NavList from './NavList'
import NavLink from './NavLink'
import { useScreenStatus } from '@/app/contexts/ScreeStatusContext'

export default function Menu() {
  const { width } = useScreenStatus()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(
    function () {
      if (width && width > 750) setIsMenuOpen(false)
    },
    [width]
  )

  return (
    <div className={styles.menu}>
      <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} size={25} />
      <Body isOpen={isMenuOpen}>
        <Search />
        <NavList>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/movies">Movies</NavLink>
          <NavLink href="/shows">TV Shows</NavLink>
          <NavLink href="/favorites">Favorites</NavLink>
        </NavList>
      </Body>
    </div>
  )
}
