import React from 'react'
import styles from './VideoBackground.module.css'
import Playback from './Playback'

interface Props {
  children: React.ReactNode
}

export default function VideoBackground({ children }: Props) {
  return (
    <div className={styles.videoBackground}>
      <Playback />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
