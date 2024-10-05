'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Movie from './Movie'
import styles from './Carousel.module.css'

interface Props {
  movies: any[]
}

export default function Carousel({ movies }: Props) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      loop
      pagination={{
        clickable: true,
      }}
      className={styles.carousel}
      autoplay={{
        delay: 5000, // Delay between slides in ms
        disableOnInteraction: false, // Auto play continues even after user interaction
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Movie movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
