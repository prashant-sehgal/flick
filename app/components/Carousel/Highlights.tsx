import React from 'react'
import styles from './Carousel.module.css'

interface Props {
  releaseYear: number
  genre: string
  duration: string
}

export default function Highlights({ releaseYear, genre, duration }: Props) {
  return (
    <p className={styles.highlights}>
      <span>{releaseYear}</span>
      <i className="ri-circle-fill"></i>
      <span>{genre}</span>
      <i className="ri-circle-fill"></i>
      <span>{duration}</span>
    </p>
  )
}
