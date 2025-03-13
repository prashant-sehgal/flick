// 'use client'
import styles from './page.module.css'
import Carousel from './components/Carousel/Carousel'
import MovieListView from './components/MovieListView/MovieListView'
import { useMovies } from './contexts/MovieContext'

export default function Home() {
  // const { featuredMovies, latestMovies, topRatedMovies } = useMovies()

  return (
    <div className={styles.page}>
      <Carousel />
      {/* <MovieListView title="Latest Releases" movies={latestMovies} spacing />
      <MovieListView
        title="Top Rated On IMDb"
        movies={topRatedMovies}
        spacing
      />
      <MovieListView
        title="Your Perfect Picks"
        movies={featuredMovies}
        spacing
      /> */}
    </div>
  )
}
