'use client'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar } from 'swiper/modules'
import MovieCard from '../MovieCard/MovieCard'
import styles from './MovieListView.module.css'
import { useLayout } from '@/app/contexts/LayoutContext'

interface Props {
  title: string
}

export default function MovieListView(props: Readonly<Props>) {
  const prevButton = useRef(null)
  const nextButton = useRef(null)
  const layout = useLayout()

  // const slidesPerView = layout.width && layout.width < 750 ? 2 : 8

  return (
    <div className={styles.movieListView}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <button ref={prevButton} className={styles.customPrevButton}>
            &#8249;
          </button>
          <button ref={nextButton} className={styles.customNextButton}>
            &#8250;
          </button>
        </div>
        <Swiper
          modules={[Navigation, Scrollbar]}
          navigation={{
            prevEl: prevButton.current,
            nextEl: nextButton.current,
          }}
          onInit={(swiper: any) => {
            // Attach Swiper instance to navigation buttons
            swiper.params.navigation.prevEl = prevButton.current
            swiper.params.navigation.nextEl = nextButton.current
            swiper.navigation.init()
            swiper.navigation.update()
          }}
          spaceBetween={10}
          slidesPerView={8}
          breakpoints={{
            350: {
              slidesPerView: 2,
            },
            550: {
              slidesPerView: 4,
            },
            750: {
              slidesPerView: 6,
            },
            950: {
              slidesPerView: 8,
            },
          }}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <SwiperSlide key={index}>
              <MovieCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
