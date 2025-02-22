import React from 'react'
import styles from './Carousel.module.css'
import PrimaryAction from '../PrimaryAction/PrimaryAction'
import limitString from '@/app/utils/limitString'

export default function Slide() {
  return (
    <div className={styles.slide}>
      <div className={styles.overlay}>
        <div className={styles.details}>
          <h1>Avatar</h1>
          <p>2021 ‧ Action/Adventure</p>
          <p>
            {limitString(
              `A paraplegic Marine dispatched to the moon Pandora on a unique
            mission becomes torn between following his orders and protecting the
            world he feels is his home.`,
              26
            )}
          </p>
          <PrimaryAction href="/movies/movie" height={2.4}>
            Explore
          </PrimaryAction>
        </div>
      </div>
      <img src="/poster.webp" alt="poster" />
    </div>
  )
}
