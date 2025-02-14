'use client'
import React, { useEffect, useState } from 'react'
import Hamburger from 'hamburger-react'
import styles from './Navbar.module.css'
import Menu from './Menu'
import NavLink from './NavLink'
import { useLayout } from '@/app/contexts/LayoutContext'

export default function SideBar() {
  const [isOpen, setOpen] = useState(false)
  const layout = useLayout()

  useEffect(
    function () {
      if (layout.width && layout.width > 750) setOpen(false)
    },
    [layout]
  )

  return (
    <div className={styles.sidebar}>
      <Hamburger toggled={isOpen} toggle={setOpen} direction="left" size={28} />

      <Menu isOpen={isOpen}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/movies">Movies</NavLink>
        <NavLink href="/shows">TV Shows</NavLink>
        <NavLink href="/favorites">Favorites</NavLink>
      </Menu>
    </div>
  )
}
