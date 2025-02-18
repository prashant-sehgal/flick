import React from 'react'
import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import useLayout from '@/app/hooks/useLayout'

interface Props {
  children: React.ReactNode
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
        {props.children}
      </Swiper>
    </div>
  )
}
