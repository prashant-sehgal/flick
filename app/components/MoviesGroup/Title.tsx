import React from 'react'
import styles from './MoviesGroup.module.css'

interface Props {
  title: string
  subString: string
}

export default function Title({ title, subString }: Props) {
  return (
    <p className={styles.titleContainer}>
      <span className={styles.title}> {title}</span> :{' '}
      <span className={styles.subString}>{subString}</span>
    </p>
  )
}
