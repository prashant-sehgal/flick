import React from 'react'
import HomeLayout from '../components/HomeLayout/HomeLayout'
import MovieCard from '../components/MovieCard/MovieCard'
import styles from './page.module.css'

export default function page() {
  return (
    <HomeLayout>
      <div className={styles.page}>
        <h3>YOUR ULTIMATE WATCHLIST</h3>
        <div className={styles.container}>
          <MovieCard width={8} />
          <MovieCard width={8} />
          <MovieCard width={8} />
          <MovieCard width={8} />
          <MovieCard width={8} />
        </div>
      </div>
    </HomeLayout>
  )
}
