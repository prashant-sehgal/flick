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
    <div className={styles.mediaPlayer}>
      <MediaPlayer
        title="Sprite Fight"
        src="https://files.vidstack.io/sprite-fight/720p.mp4"
        autoPlay={true}
      >
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
    </div>
  )
}
