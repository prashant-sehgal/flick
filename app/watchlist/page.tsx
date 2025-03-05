import React from 'react'
import styles from './page.module.css'
import MovieCard from '../components/MovieCard/MovieCard'

export default function page() {
  return (
    <div className={styles.page}>
      {/* {Array.from({ length: 5 }).map((_, i) => (
        <MovieCard width={8} key={i} />
      ))} */}
    </div>
  )
}
