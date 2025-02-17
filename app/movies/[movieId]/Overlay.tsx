import React from 'react'
import styles from './page.module.css'

interface Props {
  children: React.ReactNode
  img: string
}

export default function Overlay(props: Readonly<Props>) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>{props.children}</div>
      <img src={props.img} alt="poster-img" />
    </div>
  )
}
