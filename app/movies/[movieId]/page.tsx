'use client'
import React from 'react'
import styles from './page.module.css'
import Navbar from '@/app/components/Navbar/Navbar'
import ImageBackground from './ImageBackground'
import MovieListView from '@/app/components/MovieListView/MovieListView'
import PrimaryAction from '@/app/components/widgets/PrimaryAction'
import IMDB from './IMDB'
import Seperator from './Seperator'

interface Props {
  params: { movieId: string }
}

export default function page(props: Readonly<Props>) {
  return (
    <div className={styles.page}>
      <Navbar />
      <ImageBackground src="/NWH-IMAX-Poster.webp">
        <div className={styles.content}>
          <div className={styles.card}>
            <img
              src="/spider-mannowayhome_lob_crd_03.webp"
              alt="/spider-mannowayhome_lob_crd_03.webp"
            />
          </div>
          <div className={styles.container}>
            <Seperator items={['Action', 'Adventure', 'Sci-fi']} />
            <h1 className={styles.title}>Spider-Man: No Way Home</h1>
            <Seperator items={['2h 28m', '2021', <IMDB rating="5.0" />]} />
            <div className={styles.desc}>
              With Spider-Man's identity now revealed, Peter asks Doctor Strange
              for help. When a spell goes wrong, dangerous foes from other
              worlds start to appear.
            </div>
            <div className={styles.actions}>
              <PrimaryAction href="/player/movie">Play Now</PrimaryAction>
              <PrimaryAction onPress={() => ''}>Add to Favorites</PrimaryAction>
            </div>
          </div>
        </div>
        <MovieListView title="Similar Flicks" />
      </ImageBackground>
    </div>
  )
}
