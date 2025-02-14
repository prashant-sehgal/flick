'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Search from './Search'
import Filters from './Filters'
import MovieListView from '../components/MovieListView/MovieListView'
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator'

export default function page() {
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(
    function () {
      setTimeout(function () {
        setIsLoading(false)
      }, 2000)
    },
    [setIsLoading]
  )

  return (
    <div className={styles.page}>
      <Search setter={setQuery} />
      <Filters />

      {isLoading ? <LoadingIndicator /> : <MovieListView title="Results" />}
      <MovieListView title="Recommendation" />
    </div>
  )
}
