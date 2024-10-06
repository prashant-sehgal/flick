'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styles from './MoviesGroup.module.css'
import MovieCard from '../MovieCard/MovieCard'

interface Props {
  title: string
  movies: any[]
}

export default function MoviesGroup({ title, movies }: Props) {
  return (
    <div className={styles.moviesGroup}>
      <p className={styles.title}>{title}</p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView="auto"
        navigation
      >
        {movies.map((movie, i) => (
          <SwiperSlide
            key={movie}
            style={{
              width: 'auto' /* Let Swiper decide the width */,
              flexShrink: 0 /* Prevent shrinking */,
            }}
          >
            <MovieCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
