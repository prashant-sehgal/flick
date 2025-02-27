import React from 'react'
import styles from './page.module.css'

interface Props {
  ratings: number
}

export default function IMDb(props: Readonly<Props>) {
  return (
    <div className={styles.imdb}>
      <img src="/imdb-logo.webp" alt="imdb-logo" />
      <p>{props.ratings} ✨</p>
    </div>
  )
}
