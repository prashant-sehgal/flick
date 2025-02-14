import React from 'react'
import styles from './Navbar.module.css'

interface Props {
  children: React.ReactNode
  isOpen: boolean
}

export default function Menu(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    left: props.isOpen ? 0 : '-20rem',
  }
  return (
    <div className={styles.menu} style={style}>
      {props.children}
    </div>
  )
}
