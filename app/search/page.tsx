'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import SearchForm from './SearchForm'
import Filters from './Filters'
import { useMovies } from '../contexts/MovieContext'
import MovieListView from '../components/MovieListView/MovieListView'
import Movie from '../types/Movie'

export default function page() {
  const {
    featuredMovies,
    movies,
    searchMovies,
    actionMovies,
    adventureMovies,
    sciFiMovies,
    dramaMovies,
    comedyMovies,
    fantasyMovies,
  } = useMovies()
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Movie[]>()
  const [genre, setGenre] = useState('')

  useEffect(
    function () {
      if (!movies || !searchMovies) return

      const results = searchMovies(movies, query)
      setSearchResults(results)
      setGenre('')
    },
    [query]
  )

  useEffect(
    function () {
      switch (genre) {
        case 'action':
          setSearchResults(actionMovies)
          break

        case 'adventure':
          setSearchResults(adventureMovies)
          break

        case 'sci-fi':
          setSearchResults(sciFiMovies)
          break

        case 'drama':
          setSearchResults(dramaMovies)
          break

        case 'comedy':
          setSearchResults(comedyMovies)
          break

        case 'fantasy':
          setSearchResults(fantasyMovies)
          break
      }
    },
    [genre]
  )

  return (
    <div className={styles.page}>
      <SearchForm setter={setQuery} />
      <Filters setter={setGenre} />
      {searchResults && searchResults.length === 0 && <p>No results found</p>}
      {searchResults && searchResults.length > 0 && (
        <MovieListView title="Results" movies={searchResults} spacing />
      )}
      <MovieListView
        title="You may also like"
        movies={featuredMovies || []}
        spacing
      />
    </div>
  )
}
