import React from 'react'
import styles from './Carousel.module.css'

interface Props {
  highlights: string[]
  fontSize?: number
}

export default function Highlights({ highlights, fontSize }: Props) {
  return (
    <p className={styles.highlights} style={{ fontSize: `${fontSize}rem` }}>
      {/* <span>{releaseYear}</span>
      <i className="ri-circle-fill"></i>
      <span>{genre}</span>
      <i className="ri-circle-fill"></i>
      <span>{duration}</span> */}
      {highlights.map((highlight, index) => (
        <React.Fragment key={index}>
          <span>{highlight}</span>
          {index < highlights.length - 1 && <i className="ri-circle-fill"></i>}
        </React.Fragment>
      ))}
    </p>
  )
}
