import PrimaryAction from '../widgets/PrimaryAction'
import styles from './component.module.css'

export default function Slide() {
  return (
    <div className={styles.slide}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <p className={styles.title}>Spider-Man: No Way Home</p>
          <p className={styles.details}>2021 ‧ Action/Sci-fi</p>
          <p className={styles.description}>
            With Spider-Man's identity now revealed, Peter asks Doctor Strange
            for help. When a spell goes wrong...
          </p>

          <PrimaryAction href="/player/Spider-Man:-No-Way-Home">
            Watch Now
          </PrimaryAction>
        </div>
      </div>

      <img src="/NWH-IMAX-Poster.webp" alt="slide-image" />
    </div>
  )
}
