'use client'
import React, { useEffect, useState } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Slide from './Slide'
import Loading from '@/app/components/Loading/Loading'

export default function Carousel() {
  const [movies, setMovies] = useState<number | undefined>(undefined)

  useEffect(function () {
    setTimeout(function () {
      setMovies(1)
    }, 1000)
  }, [])

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
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
    </Swiper>
  )
}
