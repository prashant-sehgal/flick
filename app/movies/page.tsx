'use client'
import React, { useEffect, useState } from 'react'
import HomeLayout from '../components/HomeLayout/HomeLayout'
import Loading from '../components/MoviesListView/Loading'
import styles from './page.module.css'
import MoviesListView from '../components/MoviesListView/MoviesListView'
import { useMovies } from '../contexts/MoviesContext'

export default function page() {
  const { getLatestMovies, getTopIMDbMovies, getGenre } = useMovies()

  return (
    <HomeLayout>
      <div className={styles.page}>
        <MoviesListView title="New Releases" movies={getLatestMovies()} />
        <MoviesListView title="Top Rated On IMDb" movies={getTopIMDbMovies()} />
        <MoviesListView title="Action Unleashed" movies={getGenre('action')} />
        <MoviesListView
          title="Grand Adventures"
          movies={getGenre('adventure')}
        />
        <MoviesListView title="Beyond Reality" movies={getGenre('sci-fi')} />
        <MoviesListView title="Laugh Riot" movies={getGenre('comedy')} />
        <MoviesListView
          title="Magical Fantasy Realms"
          movies={getGenre('fantasy')}
        />
        <MoviesListView
          title="Drama that Hits Hard"
          movies={getGenre('drama')}
        />
      </div>
    </HomeLayout>
  )
}
