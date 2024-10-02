'use client'
import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { Spiral as Hamburger } from 'hamburger-react'
import Body from './Body'
import Search from './Search'
import NavList from './NavList'
import NavLink from './NavLink'

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  //   this effect will automatically turn off menu when screen width increased more than 750px
  useEffect(function () {
    function handleResize() {
      if (window.innerWidth > 750) setIsMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)

    //   clean up
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
