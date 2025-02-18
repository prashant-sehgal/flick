'use client'
import React from 'react'
import styles from './MoviesListView.module.css'
import { SwiperSlide } from 'swiper/react'
import MovieCard from '../MovieCard/MovieCard'
import Loading from './Loading'
import SliderProvider from './SliderProvider'

interface Props {
  title: string
  movies: any[]
}

export default function MoviesListView(props: Readonly<Props>) {
  return (
    <div className={styles.moviesListView}>
      <h3>{props.title}</h3>
      {props.movies && props.movies.length > 0 ? (
        <SliderProvider>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
        </SliderProvider>
      ) : (
        <Loading />
      )}
    </div>
  )
}
