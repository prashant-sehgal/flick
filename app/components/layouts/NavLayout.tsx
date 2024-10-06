import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './NavLayout.module.css'

interface Props {
  children: React.ReactNode
}

export default function NavLayout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.page}>{children}</div>
    </div>
  )
}
