import React from 'react'
import styles from './MovieCard.module.css'

export default function MovieCard() {
  return (
    <div className={styles.movieCard}>
      <img src="/eternals_lob_crd_06.webp" alt="eternals_lob_crd_06.webp" />
      <div className={styles.overlay}>
        <button className={styles.playButton}>
          <i className="ri-play-fill"></i>
        </button>
      </div>
    </div>
  )
}
