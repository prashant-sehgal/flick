'use client'
import Carousel from './components/Carousel/Carousel'
import Header from './components/Header/Header'
import HomeLayout from './components/HomeLayout/HomeLayout'
import MovieCard from './components/MovieCard/MovieCard'
import MoviesListView from './components/MoviesListView/MoviesListView'
import useLayout from './hooks/useLayout'
import styles from './page.module.css'

export default function Home() {
  return (
    <HomeLayout>
      <div className={styles.page}>
        <Carousel />
        <MoviesListView title="Latest Releases" movies={[0]} />
        <MoviesListView title="Top Rated On IMDb" movies={[0]} />
        <MoviesListView title="Your Perfect Picks" movies={[0]} />
      </div>
    </HomeLayout>
  )
}
