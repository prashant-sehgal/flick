'use client'
import React, { useEffect, useState } from 'react'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default'
import styles from './page.module.css'
import useAPI from '@/app/hooks/useAPI'

interface Props {
  params: { movieId: string }
}

export default function page(props: Readonly<Props>) {
  const [source, setSource] = useState<string>()
  const [title, setTitle] = useState<string>()
  const { client } = useAPI()

  useEffect(
    function () {
      async function fetchMovieSource() {
        const response = await client.get(`/movies/${props.params.movieId}`)
        if (response.status !== 200) return

        setSource(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/streams/${response.data.data.document.media}`
        )
        setTitle(response.data.data.document.title)
      }
      fetchMovieSource()
    },
    [props.params.movieId, setSource]
  )

  return (
    <MediaPlayer title={title} src={source} className={styles.mediaPlayer}>
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  )
}
