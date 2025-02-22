import styles from './page.module.css'
import Carousel from './components/Carousel/Carousel'
import MovieListView from './components/MovieListView/MovieListView'

export default function Home() {
  return (
    <div className={styles.page}>
      <Carousel />
      <MovieListView title="Latest Releases" spacing />
      <MovieListView title="Top Rated On IMDb" spacing />
      <MovieListView title="Your Perfect Picks" spacing />
    </div>
  )
}
