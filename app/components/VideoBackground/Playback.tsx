'use client'
import React, { useEffect, useState } from 'react'
import styles from './VideoBackground.module.css'

export default function Playback() {
  const [imageOpacity, setImageOpacity] = useState(1)

  useEffect(function () {
    const intervalId = setInterval(function () {
      setImageOpacity(0)
    }, 4000)

    // clean up
    return () => {
      clearInterval(intervalId)
    }
  }, [])
  return (
    <div className={styles.playback}>
      <video src="/video.mp4" muted autoPlay />
      <img
        src="/poster-wide.webp"
        alt="/poster-wide.webp"
        style={{ opacity: imageOpacity }}
      />
    </div>
  )
}
