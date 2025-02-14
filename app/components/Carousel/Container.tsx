import React from 'react'
import styles from './Carousel.module.css'

interface Props {
  children: React.ReactNode
}

export default function Container(props: Readonly<Props>) {
  return <div className={styles.container}>{props.children}</div>
}
