import React from 'react'
import styles from './Carousel.module.css'
import PrimaryButton from '@/app/PrimaryButton/PrimaryButton'
import Overlay from './Overlay'
import Container from './Container'

export default function Slide() {
  return (
    <div className={styles.slide}>
      <Overlay>
        <Container>
          <h2>Spider-Man: No Way Home </h2>
          <p>2021 ‧ Action/Sci-fi</p>
          <p>
            With Spider-Man's identity now revealed, Peter asks Doctor Strange
            for help. When a spell goes wrong...
          </p>
          <PrimaryButton onPress={() => ''}>Explore</PrimaryButton>
        </Container>
      </Overlay>
      <img src="tWBCzb.webp" alt="slide-image" />
    </div>
  )
}
