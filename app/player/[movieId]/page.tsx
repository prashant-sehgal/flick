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
    <MediaPlayer
      title="Sprite Fight"
      src="https://files.vidstack.io/sprite-fight/720p.mp4"
      className={styles.mediaPlayer}
    >
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  )
}
