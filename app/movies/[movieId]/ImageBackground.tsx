import React from 'react'
import styles from './page.module.css'

interface Props {
  children: React.ReactNode
  src: string
}

export default function ImageBackground(props: Readonly<Props>) {
  return (
    <div className={styles.imageBackground}>
      <div className={styles.overlay}>{props.children}</div>
      <div className={styles.background}>
        <img src={props.src} alt={props.src} />
      </div>
    </div>
  )
}
