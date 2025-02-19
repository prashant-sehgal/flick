import React from 'react'
import styles from './MovieCard.module.css'
import Link from 'next/link'
import Movie from '@/app/types/Movie'

interface Props {
  width?: number
  movie: Movie
}

export default function MovieCard(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    width: props.width ? `${props.width}rem` : '`100%',
  }
  return (
    <div className={styles.movieCard} style={style}>
      <div className={styles.overlay}>
        <Link href={`/movies/${props.movie.id}`}>
          <i className="ri-play-large-fill"></i>
        </Link>
      </div>
      <img src={props.movie.cardUrl} alt="movie-card" />
    </div>
  )
}
