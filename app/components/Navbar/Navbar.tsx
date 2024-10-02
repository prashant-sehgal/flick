import React from 'react'
import styles from './Navbar.module.css'
import Logo from '../Logo'
import Container from './Container'
import NavList from './NavList'
import NavLink from './NavLink'
import SignIn from './SignIn'
import Search from './Search'
import Menu from './Menu'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Container>
        <Menu />
        <Logo />
        <NavList>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/movies">Movies</NavLink>
          <NavLink href="/shows">TV Shows</NavLink>
          <NavLink href="/favorites">Favorites</NavLink>
        </NavList>
      </Container>
      <Container>
        <Search />
        <SignIn />
      </Container>
    </div>
  )
}
