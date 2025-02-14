import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel'
import styles from './page.module.css'
import MovieListView from './components/MovieListView/MovieListView'

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Carousel />
      <MovieListView title="Latest Release" />
      <MovieListView title="Cinematic Gold" />
      <MovieListView title="Tailored Suggestions" />
    </div>
  )
}
