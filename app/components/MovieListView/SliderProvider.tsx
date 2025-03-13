'use client'
import useLayout from '@/app/hooks/useLayout'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

interface Props {
  children: React.ReactNode[]
}

export default function SliderProvider(props: Readonly<Props>) {
  const { width } = useLayout()

  return (
    <div>
      <Swiper
        navigation={Boolean(width && width > 750)}
        modules={[Navigation]}
        spaceBetween={10}
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
        {props.children.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
