import React from 'react'
import styles from './MovieCard.module.css'
import Link from 'next/link'

interface Props {
  width?: number
}

export default function MovieCard(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    width: props.width ? `${props.width}rem` : '`100%',
  }
  return (
    <div className={styles.movieCard} style={style}>
      <div className={styles.overlay}>
        <Link href="/movies">
          <i className="ri-play-large-fill"></i>
        </Link>
      </div>
      <img src="/card-206358-1739516455474.webp" alt="movie-card" />
    </div>
  )
}
