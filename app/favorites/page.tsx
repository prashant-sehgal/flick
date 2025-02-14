import React from 'react'
import styles from './page.module.css'
import Navbar from '../components/Navbar/Navbar'
import MovieCard from '../components/MovieCard/MovieCard'

export default function page() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.moviesContainer}>
        <p className={styles.title}>Your Personal Watchlist</p>
        <div className={styles.container}>
          <MovieCard width={10} />
          <MovieCard width={10} />
          <MovieCard width={10} />
          <MovieCard width={10} />
          <MovieCard width={10} />
          <MovieCard width={10} />
          <MovieCard width={10} />
        </div>{' '}
      </div>
    </div>
  )
}
