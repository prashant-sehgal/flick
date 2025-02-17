'use client'
import React from 'react'
import styles from './page.module.css'
import HomeLayout from '@/app/components/HomeLayout/HomeLayout'
import Overlay from './Overlay'
import MoviesListView from '@/app/components/MoviesListView/MoviesListView'
import IMDb from './IMDb'
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButton'

interface Props {
  params: { movieId: string }
}

export default function page(props: Readonly<Props>) {
  return (
    <HomeLayout>
      <Overlay img="/tWBCzb.webp">
        <div className={styles.movie}>
          <p className={styles.info}>Action / Adventure / Fantasy / Sci-Fi</p>
          <p className={styles.title}>Spider-Man: No Way Home</p>
          <p className={styles.info}>2021 / 2h 28m </p>
          <p className={styles.description}>
            With Spider-Man's identity now revealed, Peter asks Doctor Strange
            for help. When a spell goes wrong, dangerous foes from other worlds
            start to appear.
          </p>
          <IMDb ratings={8.2} />
          <div className={styles.actions}>
            <PrimaryButton onPress={() => ''}>
              Play Now <i className="ri-play-circle-line"></i>
            </PrimaryButton>
            <PrimaryButton onPress={() => ''}>
              Add To Watchlist <i className="ri-bookmark-3-line"></i>{' '}
            </PrimaryButton>
          </div>
        </div>
        <MoviesListView title="You May Also Like" movies={[0]} />
      </Overlay>
    </HomeLayout>
  )
}
