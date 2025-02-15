'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import SearchForm from './SearchForm'
import EdgeButton from '../components/EdgeButton/EdgeButton'
import MoviesListView from '../components/MoviesListView/MoviesListView'
import Loading from './Loading'

export default function page() {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(function () {
    setTimeout(function () {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className={styles.page}>
      <SearchForm setter={setQuery} />
      <div className={styles.action}>
        <EdgeButton onPress={() => ''}>Action</EdgeButton>
        <EdgeButton onPress={() => ''}>Adventure</EdgeButton>
        <EdgeButton onPress={() => ''}>Sci-Fi</EdgeButton>
        <EdgeButton onPress={() => ''}>Drama</EdgeButton>
        <EdgeButton onPress={() => ''}>Comedy</EdgeButton>
        <EdgeButton onPress={() => ''}>Fantasy</EdgeButton>
      </div>
      {loading ? <Loading /> : <MoviesListView title="Results" movies={[]} />}
      <MoviesListView title="Your Perfect Picks" movies={[]} />
    </div>
  )
}
