'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import styles from './MoviesGroup.module.css'
import MovieCard from '../MovieCard/MovieCard'
import { useScreenStatus } from '@/app/contexts/ScreeStatusContext'

interface Props {
  title: string
  subTitle: string
  movies: any[]
}

export default function MoviesGroup({ title, subTitle, movies }: Props) {
  const { width } = useScreenStatus()
  return (
    <div className={styles.moviesGroup}>
      <p className={styles.titleContainer}>
        <span className={styles.title}> {title}</span> :{' '}
        <span className={styles.sub}>{subTitle}</span>
      </p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView="auto"
        navigation={width && width > 750 ? true : false}
      >
        {movies.map((movie, i) => (
          <SwiperSlide
            key={Math.random()}
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
