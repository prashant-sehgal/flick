'use client'
import React from 'react'
import MovieListView from '../components/MovieListView/MovieListView'
import styles from './page.module.css'
import { useMovies } from '../contexts/MovieContext'

export default function page() {
  const {
    actionMovies,
    comedyMovies,
    dramaMovies,
    sciFiMovies,
    adventureMovies,
    fantasyMovies,
  } = useMovies()

  return (
    <div className={styles.page}>
      {/* <MovieListView title="Action-Packed Thrills" movies={actionMovies} />
      <MovieListView title="Sci-Fi Spectacles" movies={sciFiMovies} />
      <MovieListView title="Comedy Gold" movies={comedyMovies} />
      <MovieListView title="Adventure Awaits" movies={adventureMovies} />
      <MovieListView title="Enchanted Realms" movies={fantasyMovies} />
      <MovieListView title="Dramatic Masterpieces" movies={dramaMovies} /> */}
    </div>
  )
}
