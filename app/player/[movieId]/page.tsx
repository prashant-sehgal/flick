import React from 'react'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default'
import styles from './page.module.css'

interface Props {
  params: { movieId: string }
}

export default function page(props: Readonly<Props>) {
  return (
    <video
      src="http://localhost:8000/api/v1/content/media-stream/67a78bd062ddc17e05d2b6ed"
      controls
    ></video>
    // <MediaPlayer
    //   className={styles.mediaPlayer}
    //   title="Spider-Man: No Way Home | Official IMAX® Trailer"
    //   src="http://localhost:8000/api/v1/content/media-stream/67a78bd062ddc17e05d2b6ed"
    //   autoPlay
    // >
    //   <MediaProvider />
    //   <DefaultVideoLayout
    //     // thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
    //     icons={defaultLayoutIcons}
    //   />
    // </MediaPlayer>
  )
}
