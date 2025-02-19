import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slide from './Slide'
import { useMovies } from '@/app/contexts/MoviesContext'
import Loading from './Loading'

export default function Carousel() {
  const { getFeaturedMovies } = useMovies()
  const movies = getFeaturedMovies()

  if (!movies) return <Loading />

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 4,
      }}
      autoplay={{
        delay: 5000, // 5 seconds
        disableOnInteraction: false,
      }}
      //   spaceBetween={8}
      slidesPerView={1}
    >
      {movies &&
        movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Slide movie={movie} />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
