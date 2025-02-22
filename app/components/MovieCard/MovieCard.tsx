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
        <Link href="/movies/movie">
          <i className="ri-play-large-fill"></i>
        </Link>
      </div>
      <img src="/card.png" alt="card" />
    </div>
  )
}
