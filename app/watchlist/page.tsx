'use client'
import React from 'react'
import styles from './page.module.css'
import MovieCard from '../components/MovieCard/MovieCard'
import { useWatchlist } from '../contexts/WatchlistContext'

export default function page() {
  const { watchlist } = useWatchlist()

  return (
    <div className={styles.page}>
      {watchlist.map((movie, i) => (
        <MovieCard movie={movie} width={8} key={movie._id} />
      ))}
    </div>
  )
}
