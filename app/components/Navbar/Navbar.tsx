import React from 'react'
import Flick from './Flick'
import NavList from './NavList'
import NavLink from './NavLink'
import Actions from './Actions'
import Search from './Search'
import SideBar from './SideBar'
import User from './User'
import styles from './Navbar.module.css'
import Label from './Label'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.leftContainer}>
        <SideBar />
        <Flick size={1.8} />
        <Label />
      </div>

      <NavList>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/movies">Movies</NavLink>
        <NavLink href="/shows">TV Shows</NavLink>
        <NavLink href="/favorites">Favorites</NavLink>
      </NavList>

      <Actions>
        <Search />
        <User />
      </Actions>
    </div>
  )
}
