'use client'
import React, { useEffect, useState } from 'react'
import HomeLayout from '../components/HomeLayout/HomeLayout'
import Loading from '../components/MoviesListView/Loading'
import styles from './page.module.css'
import MoviesListView from '../components/MoviesListView/MoviesListView'

export default function page() {
  const [movies, setMovies] = useState<any>([])
  useEffect(function () {
    setTimeout(function () {
      setMovies([...movies, { title: 'hello' }])
    }, 2000)
  }, movies)

  return (
    <HomeLayout>
      <div className={styles.page}>
        <MoviesListView title="New Releases" movies={movies} />
        <MoviesListView title="Top Rated On IMDb" movies={movies} />
        <MoviesListView title="Action Unleashed" movies={movies} />
        <MoviesListView title="Grand Adventures" movies={movies} />
        <MoviesListView title="Beyond Reality" movies={movies} />
        <MoviesListView title="Laugh Riot" movies={movies} />
        <MoviesListView title="Magical Fantasy Realms" movies={movies} />
        <MoviesListView title="Drama that Hits Hard" movies={movies} />
      </div>
    </HomeLayout>
  )
}
