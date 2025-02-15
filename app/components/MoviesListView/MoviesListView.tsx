import Movie from '@/app/@types/Movie'
import React from 'react'
import styles from './MoviesListView.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import MovieCard from '../MovieCard/MovieCard'
import useLayout from '@/app/hooks/useLayout'

interface Props {
  title: string
  movies: any[]
}

export default function MoviesListView(props: Readonly<Props>) {
  const { width } = useLayout()
  return (
    <div className={styles.moviesListView}>
      <h3>{props.title}</h3>
      <div>
        <Swiper
          navigation={Boolean(width && width > 750)}
          modules={[Navigation]}
          spaceBetween={10}
          breakpoints={{
            350: {
              slidesPerView: 3,
            },
            550: {
              slidesPerView: 5,
            },
            750: {
              slidesPerView: 7,
            },
            950: {
              slidesPerView: 9,
            },
          }}
        >
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
        </Swiper>
      </div>
    </div>
  )
}
