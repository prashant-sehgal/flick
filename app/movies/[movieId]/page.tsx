import NavLayout from '@/app/components/layouts/NavLayout'
import VideoBackground from '@/app/components/VideoBackground/VideoBackground'
import React from 'react'

interface Props {
  params: { movieId: string }
}

export default function page({ params }: Props) {
  return (
    <NavLayout>
      <VideoBackground>
        <h2>Cars 3</h2>
      </VideoBackground>
    </NavLayout>
  )
}
