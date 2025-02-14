import React from 'react'
import styles from './Navbar.module.css'

interface Props {
  children: React.ReactNode
}

export default function Actions(props: Readonly<Props>) {
  return <div className={styles.actions}>{props.children}</div>
}
