'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import SearchForm from './SearchForm'
import Filters from './Filters'
import MovieListView from '../components/MovieListView/MovieListView'
import { useMovies } from '../contexts/MovieContext'

export default function page() {
  const [query, setQuery] = useState('')
  const { featuredMovies } = useMovies()

  function onSubmitForm(query: string) {
    setQuery(query)
  }

  return (
    <div className={styles.page}>
      <SearchForm onSubmitForm={onSubmitForm} />
      <Filters />
      <div className={styles.moviesCotnainer}>
        {/* <MovieListView title="Results" /> */}
        <MovieListView title="You May Also Like" movies={featuredMovies} />
      </div>
    </div>
  )
}
