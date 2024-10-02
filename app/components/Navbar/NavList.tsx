import React from 'react'
import styles from './Navbar.module.css'

interface Props {
  children: React.ReactNode
}

export default function NavList({ children }: Props) {
  return <div className={styles.navlist}>{children}</div>
}
