import React from 'react'
import styles from './Carousel.module.css'
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButton'
import Overlay from './Overlay'
import Container from './Container'
import Movie from '@/app/types/Movie'
import limitString from '@/app/utils/limitString'

interface Props {
  movie: Movie
}

export default function Slide(props: Readonly<Props>) {
  return (
    <div className={styles.slide}>
      <Overlay>
        <Container>
          <h2>{props.movie.title}</h2>
          <p>
            {props.movie.releasedYear} ‧ {props.movie.genres[0]}/
            {props.movie.genres[1]}
          </p>
          <p>{limitString(props.movie.description, 95)}</p>
          <PrimaryButton href={`/movies/${props.movie.id}`}>
            Explore
          </PrimaryButton>
        </Container>
      </Overlay>
      <img src={props.movie.posterUrl} alt="slide-image" />
    </div>
  )
}
