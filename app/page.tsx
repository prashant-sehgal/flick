import Carousel from './components/Carousel/Carousel'
import Header from './components/Header/Header'
import HomeLayout from './components/HomeLayout/HomeLayout'
import styles from './page.module.css'

export default function Home() {
  return (
    <HomeLayout>
      <div className={styles.page}>
        <Carousel />
      </div>
    </HomeLayout>
  )
}
