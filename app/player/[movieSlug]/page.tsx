'use client'
import React, { useEffect, useState } from 'react'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default'
import styles from './page.module.css'
import Loading from '@/app/components/Loading/Loading'
import Movie from '@/app/types/Movie'
import capatalize from '@/app/utils/capatailize'

interface Props {
  params: { movieSlug: string }
}

export default function page(props: Readonly<Props>) {
  const [movie, setMovie] = useState<Movie | undefined>()

  useEffect(function () {
    async function fetchSource() {
      try {
        const response = await (
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URI}/api/v1/movies?slug=${props.params.movieSlug}&fields=title,media`
          )
        ).json()

        if (response.status === 'success') setMovie(response.data.documents[0])
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
    fetchSource()
  }, [])

  return (
    <div className={styles.mediaPlayer}>
      <MediaPlayer
        title={capatalize(movie?.title || '')}
        src={`${process.env.NEXT_PUBLIC_API_URI}/api/v1/streams/${movie?.media}`}
        autoPlay={true}
      >
        <MediaProvider />
        <DefaultVideoLayout icons={defaultLayoutIcons} />
      </MediaPlayer>
    </div>
  )
}
