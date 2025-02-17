import React from 'react'
import styles from './page.module.css'

interface Props {
  ratings: number
}

export default function IMDb(props: Readonly<Props>) {
  return (
    <div className={styles.imdb}>
      <img src="/IMDB_Logo_2016.svg.png" alt="imdb-logo" />
      <p>{props.ratings} ✨</p>
    </div>
  )
}
