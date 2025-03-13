import styles from './page.module.css'
import Carousel from './components/Carousel/Carousel'
import TopRatedMovies from './components/TopRatedMovies/TopRatedMovies'
import LatestMovies from './components/LatestMovies/LatestMovies'
import FeaturedMovies from './components/FeaturedMovies/FeaturedMovies'

export default function Home() {
  return (
    <div className={styles.page}>
      <Carousel />
      <LatestMovies />
      <TopRatedMovies />
      <FeaturedMovies />
    </div>
  )
}
