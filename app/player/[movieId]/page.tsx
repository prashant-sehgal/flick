'use client'
import React, { useEffect, useState } from 'react'
import '@vidstack/react/player/styles/default/theme.css'
import '@vidstack/react/player/styles/default/layouts/video.css'
import styles from './page.module.css'
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react'
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default'
import { useScreenStatus } from '@/app/contexts/ScreeStatusContext'

interface Props {
  params: { movieId: string }
}

interface Movie {
  title: string
  posters: string[]
  src: string
}

export default function page({ params }: Props) {
  const { isDisplayVertical } = useScreenStatus()
  const [movie, setMovie] = useState<Movie>()

  // dummy movie loading effect
  useEffect(function () {
    const movie = {
      title: 'Avatar: The Way of Water | Official IMAX® Trailer',
      posters: ['/poster-wide.webp', '/poster.webp'],
      src: '/video.mp4',
    }

    setMovie(movie)
    document.title = `Watching ${movie.title} | Flick`
  }, [])

  if (!movie) return 'loading'

  return (
    <MediaPlayer
      src={movie.src}
      poster={movie.posters[Number(isDisplayVertical)]}
      className={styles.mediaPlayer}
      title={movie.title}
      viewType="video"
      streamType="on-demand"
      logLevel="warn"
      crossOrigin
      playsInline
    >
      <MediaProvider>
        <Poster className="vds-poster" />
      </MediaProvider>
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  )
}
