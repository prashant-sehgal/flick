import React from 'react'
import styles from './Carousel.module.css'
import PrimaryAction from '../PrimaryAction/PrimaryAction'
import limitString from '@/app/utils/limitString'
import Movie from '@/app/types/Movie'
import getPosterUri from '@/app/utils/getPosterUri'

interface Props {
  movie: Movie
}

export default function Slide(props: Readonly<Props>) {
  return (
    <div className={styles.slide}>
      <div className={styles.overlay}>
        <div className={styles.details}>
          <h1>{props.movie.title}</h1>
          <p>
            {props.movie.releasedYear} ‧ {props.movie.genres[0]}
          </p>
          <p>{limitString(props.movie.description, 26)}</p>
          <PrimaryAction href={`/movies/${props.movie.slug}`} height={2.4}>
            Explore
          </PrimaryAction>
        </div>
      </div>
      <img src={getPosterUri(props.movie.poster)} alt="poster" />
    </div>
  )
}
