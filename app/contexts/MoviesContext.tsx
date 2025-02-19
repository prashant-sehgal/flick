'use client'
import { createContext, use, useContext, useEffect, useState } from 'react'
import Movie from '../types/Movie'
import useAPI from '../hooks/useAPI'

interface Props {
  children: React.ReactNode
}

interface MoviesContextType {
  getFeaturedMovies: () => Movie[] | undefined
  getTopIMDbMovies: () => Movie[] | undefined
  getLatestMovies: () => Movie[] | undefined
  getGenre: (genre: string) => Movie[] | undefined
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined)

export default function MoviesProvider(props: Readonly<Props>) {
  const { client } = useAPI()
  const [movies, setMovies] = useState<Movie[]>()

  function getFeaturedMovies() {
    const result = movies?.filter((movie) => movie.featured)

    return result
  }

  function getTopIMDbMovies() {
    if (!movies) return
    return [...movies].sort((a, b) => b.imdbRating - a.imdbRating)
  }

  function getLatestMovies() {
    if (!movies) return
    return [...movies].sort((a, b) => b.releasedYear - a.releasedYear)
  }

  function getGenre(genre: string) {
    return movies?.filter((movie) => movie.genres[0] === genre)
  }

  useEffect(
    function () {
      // load first 50 movies
      async function fetchMovies() {
        const response = await client.get('/movies')
        const movies = response.data.data.documents
        if (!movies) return

        setMovies(movies)
      }
      fetchMovies()
    },
    [setMovies]
  )

  return (
    <MoviesContext.Provider
      value={{ getFeaturedMovies, getTopIMDbMovies, getLatestMovies, getGenre }}
    >
      {props.children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  const context = useContext(MoviesContext)
  if (!context)
    throw new Error('useMovies hook must be used within an MoviesProvider')

  return context
}
