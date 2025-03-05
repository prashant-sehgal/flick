'use client'
import styles from './page.module.css'
import Carousel from './components/Carousel/Carousel'
import MovieListView from './components/MovieListView/MovieListView'
import { useEffect, useState } from 'react'
import Movie from './types/Movie'

export default function Home() {
  const [latestMovies, setLatestMovies] = useState<Movie[] | undefined>()
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[] | undefined>()
  const [perfectPicks, setPerfectPicks] = useState<Movie[] | undefined>()

  useEffect(
    function () {
      async function fetchLatestMovies() {
        try {
          const response = await (
            await fetch(
              `${process.env.NEXT_PUBLIC_API_URI}/api/v1/movies?sort=-releasedYear&fields=card,slug`
            )
          ).json()

          if (response.status === 'success') {
            setLatestMovies(response.data.documents)
          }
        } catch (error: any) {
          throw new Error(error.message)
        }
      }

      fetchLatestMovies()
    },
    [setLatestMovies]
  )

  useEffect(
    function () {
      async function fetchTopRatedMovies() {
        try {
          const response = await (
            await fetch(
              `${process.env.NEXT_PUBLIC_API_URI}/api/v1/movies?sort=-imdbRating&fields=card,slug`
            )
          ).json()

          if (response.status === 'success') {
            setTopRatedMovies(response.data.documents)
          }
        } catch (error: any) {
          throw new Error(error.message)
        }
      }

      fetchTopRatedMovies()
    },
    [setTopRatedMovies]
  )

  useEffect(
    function () {
      async function fetchPerfectPicks() {
        try {
          const response = await (
            await fetch(
              `${process.env.NEXT_PUBLIC_API_URI}/api/v1/movies?featured=true&fields=card,slug`
            )
          ).json()

          if (response.status === 'success') {
            setPerfectPicks(response.data.documents)
          }
        } catch (error: any) {
          throw new Error(error.message)
        }
      }

      fetchPerfectPicks()
    },
    [setPerfectPicks]
  )

  return (
    <div className={styles.page}>
      <Carousel />
      <MovieListView title="Latest Releases" movies={latestMovies} spacing />
      <MovieListView
        title="Top Rated On IMDb"
        movies={topRatedMovies}
        spacing
      />
      <MovieListView title="Your Perfect Picks" movies={perfectPicks} spacing />
    </div>
  )
}
