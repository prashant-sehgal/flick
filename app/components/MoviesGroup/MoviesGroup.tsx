'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styles from './MoviesGroup.module.css'
import MovieCard from '../MovieCard/MovieCard'
import { useScreenStatus } from '@/app/contexts/ScreeStatusContext'
import Title from './Title'

interface Props {
  title: string
  subString: string
  movies: any[]
}

export default function MoviesGroup({ title, subString, movies }: Props) {
  const { width } = useScreenStatus()
  return (
    <div className={styles.moviesGroup}>
      <Title title={title} subString={subString} />
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView="auto"
        navigation={width && width > 750 ? true : false}
      >
        {movies.map((movie, i) => (
          <SwiperSlide key={Math.random()} className={styles.slide}>
            <MovieCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
