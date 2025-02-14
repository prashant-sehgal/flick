import React from 'react'
import styles from './MovieCard.module.css'
import Link from 'next/link'

interface Props {
  width?: number
}

export default function MovieCard(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    width: props.width ? `${props.width}rem` : '100%',
  }
  return (
    <div className={styles.movieCard} style={style}>
      <div className={styles.overlay}>
        <Link href="/player/movie">
          <i className="ri-play-fill"></i>
        </Link>
      </div>
      <img src="/spider-mannowayhome_lob_crd_03.webp" alt="movie-poster" />
    </div>
  )
}
