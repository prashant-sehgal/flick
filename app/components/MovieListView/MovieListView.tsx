'use client'
import Movie from '@/app/types/Movie'
import React, { useEffect, useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import MovieCard from '../MovieCard/MovieCard'
import SliderProvider from './SliderProvider'
import styles from './MovieListView.module.css'
import Loading from '@/app/components/Loading/Loading'

interface Props {
  title: string
  movies?: Movie[]
  spacing?: boolean
}

export default function MovieListView(props: Readonly<Props>) {
  const [isLoading, setIsLoading] = useState(true)

  const style: React.CSSProperties = {
    padding: props.spacing ? '1rem' : '0',
  }

  useEffect(function () {
    setTimeout(function () {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <div className={styles.movieListView} style={style}>
      {isLoading ? (
        <Loading height={300} />
      ) : (
        <>
          <p>{props.title}</p>
          <SliderProvider>
            {Array.from({ length: 10 }).map((e, i) => (
              <SwiperSlide key={i}>
                <MovieCard />
              </SwiperSlide>
            ))}
          </SliderProvider>
        </>
      )}
    </div>
  )
}
