import React from 'react'
import styles from './Navbar.module.css'

interface Props {
  children: React.ReactNode
  isOpen: boolean
}

export default function Body({ children, isOpen }: Props) {
  const style: React.CSSProperties = {
    left: isOpen ? 0 : '-100%',
  }
  return (
    <div className={styles.body} style={style}>
      {children}
    </div>
  )
}
