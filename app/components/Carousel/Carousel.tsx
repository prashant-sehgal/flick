'use client'
import React, { useEffect, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slide from './Slide'
import Loading from '@/app/components/Loading/Loading'
import Movie from '@/app/types/Movie'

export default function Carousel() {
  const [movies, setMovies] = useState<Movie[] | undefined>(undefined)

  useEffect(
    function () {
      async function fetchFeaturesMovies() {
        try {
          const response = await (
            await fetch(
              `${process.env.NEXT_PUBLIC_API_URI}/api/v1/movies?featured=true`,
              { credentials: 'include' }
            )
          ).json()

          if (response.status === 'success') setMovies(response.data.documents)
        } catch (error: any) {
          throw new Error(error.message)
        }
      }
      fetchFeaturesMovies()
    },
    [setMovies]
  )

  if (!movies) return <Loading width="100%" height="80vh" />

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 4,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie._id}>
          <Slide movie={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
