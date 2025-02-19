'use client'
import React from 'react'
import styles from './MoviesListView.module.css'
import { SwiperSlide } from 'swiper/react'
import MovieCard from '../MovieCard/MovieCard'
import Loading from './Loading'
import SliderProvider from './SliderProvider'
import Movie from '@/app/types/Movie'

interface Props {
  title: string
  movies: Movie[] | undefined
}

export default function MoviesListView(props: Readonly<Props>) {
  return (
    <div className={styles.moviesListView}>
      {!props.movies && <Loading />}
      {props.movies && props.movies.length ? (
        <>
          <h3>{props.title}</h3>
          <SliderProvider>
            {props.movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </SliderProvider>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
