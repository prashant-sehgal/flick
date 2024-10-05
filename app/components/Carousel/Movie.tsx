import React from 'react'
import styles from './Carousel.module.css'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import limitWords from '@/utils/limitWords'
import Overlay from './Overlay'
import Details from './Details'
import Highlights from './Highlights'

export default function Movie({ movie }: { movie: any }) {
  return (
    <div className={styles.movie}>
      <img src={movie.posters[0]} alt={movie.posters[0]} />
      <Overlay>
        <Details>
          <p className={styles.title}>{movie.title}</p>
          <Highlights
            releaseYear={movie.releaseYear}
            genre={movie.genres[0]}
            duration={movie.duration}
          />
          <p className={styles.desc}>{limitWords(movie.description, 16)}</p>
          <PrimaryButton onPress={() => null} height={2.4}>
            Watch Now
          </PrimaryButton>
        </Details>
      </Overlay>
    </div>
  )
}
