'use client'
import Carousel from './components/Carousel/Carousel'
import HomeLayout from './components/HomeLayout/HomeLayout'
import MoviesListView from './components/MoviesListView/MoviesListView'
import { useMovies } from './contexts/MoviesContext'
import styles from './page.module.css'

export default function Home() {
  const { getFeaturedMovies, getTopIMDbMovies, getLatestMovies } = useMovies()
  return (
    <HomeLayout>
      <div className={styles.page}>
        <Carousel />
        <MoviesListView title="Latest Releases" movies={getLatestMovies()} />
        <MoviesListView title="Top Rated On IMDb" movies={getTopIMDbMovies()} />
        <MoviesListView
          title="Your Perfect Picks"
          movies={getFeaturedMovies()}
        />
      </div>
    </HomeLayout>
  )
}
