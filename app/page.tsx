import styles from './page.module.css'
import Carousel from './components/Carousel/Carousel'
import MovieListView from './components/MovieListView/MovieListView'

export default function Home() {
  return (
    <div className={styles.page}>
      <Carousel />
      <MovieListView title="Latest Releases" />
      <MovieListView title="Top Rated On IMDb" />
      <MovieListView title="Your Perfect Picks" />
    </div>
  )
}
