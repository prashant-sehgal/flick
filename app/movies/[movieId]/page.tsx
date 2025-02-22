import React from 'react'
import styles from './page.module.css'
import Layout from './Layout'
import IMDb from './IMDb'
import PrimaryAction from '@/app/components/PrimaryAction/PrimaryAction'

export default function page() {
  return (
    <Layout backgroundImage="/poster.webp">
      <div className={styles.page}>
        <p>Action / Adventure / Sci-Fi / Fantasy</p>
        <h1>Avatar</h1>
        <p>2021 / 2h 28m</p>
        <p>
          A paraplegic Marine dispatched to the moon Pandora on a unique mission
          becomes torn between following his orders and protecting the world he
          feels is his home.
        </p>
        <IMDb ratings={7.9} />
        <div className={styles.actions}>
          <PrimaryAction href="/player/movie" height={3} fontSize={1}>
            Play Now
          </PrimaryAction>
          <PrimaryAction href="/player/movie" height={3} fontSize={1}>
            Add To Watchlist
          </PrimaryAction>
        </div>
      </div>
    </Layout>
  )
}
