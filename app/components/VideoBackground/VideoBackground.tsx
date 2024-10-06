import React from 'react'
import styles from './VideoBackground.module.css'

interface Props {
  children: React.ReactNode
}

export default function VideoBackground({ children }: Props) {
  return (
    <div className={styles.videoBackground}>
      <div className={styles.playback}>
        <img src="/poster-wide.webp" alt="/poster-wide.webp" />
        {/* <video src="/video.mp4" muted autoPlay /> */}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
