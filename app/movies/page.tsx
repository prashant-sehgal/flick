import React from 'react'
import MovieListView from '../components/MovieListView/MovieListView'
import styles from './page.module.css'

export default function page() {
  return (
    <div className={styles.page}>
      <MovieListView title="Action-Packed Thrills" />
      <MovieListView title="Sci-Fi Spectacles" />
      <MovieListView title="Comedy Gold" />
      <MovieListView title="Adventure Awaits" />
      <MovieListView title="Dramatic Masterpieces" />
    </div>
  )
}
