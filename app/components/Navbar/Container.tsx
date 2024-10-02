import React from 'react'
import styles from './Navbar.module.css'

interface Props {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return <div className={styles.container}>{children}</div>
}
