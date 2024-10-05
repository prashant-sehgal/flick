import React from 'react'
import styles from './Carousel.module.css'

interface Props {
  children: React.ReactNode
}

export default function Overlay({ children }: Props) {
  return <div className={styles.overlay}>{children}</div>
}
