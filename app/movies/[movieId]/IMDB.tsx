import React from 'react'
import styles from './page.module.css'

interface Props {
  rating: string
}

export default function IMDB(props: Readonly<Props>) {
  return (
    <div className={styles.imdb}>
      <img src="/IMDB_Logo_2016.svg.png" />
      {props.rating}
    </div>
  )
}
