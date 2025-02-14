import React from 'react'
import styles from './Header.module.css'

interface Props {
  children: React.ReactNode
}

export default function NavList(props: Readonly<Props>) {
  return <div className={styles.navlist}>{props.children}</div>
}
