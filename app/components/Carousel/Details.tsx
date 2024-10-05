import React from 'react'
import styles from './Carousel.module.css'

interface Props {
  children: React.ReactNode
}

export default function Details({ children }: Props) {
  return <div className={styles.details}>{children}</div>
}
