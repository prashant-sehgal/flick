'use client'
import React from 'react'
import HomeLayout from '../components/HomeLayout/HomeLayout'
import MovieCard from '../components/MovieCard/MovieCard'
import styles from './page.module.css'
import { useWatchList } from '../contexts/WatchListContext'
import Loading from './Skeleton'

export default function page() {
  const { watchList } = useWatchList()
  return (
    <HomeLayout>
      <div className={styles.page}>
        {!watchList && <Loading />}
        {watchList && watchList.length ? (
          <>
            {' '}
            <h3>YOUR ULTIMATE WATCHLIST</h3>
            <div className={styles.container}>
              {/* <MovieCard width={8} />
              <MovieCard width={8} />
              <MovieCard width={8} />
              <MovieCard width={8} />
              <MovieCard width={8} /> */}
            </div>
          </>
        ) : (
          'no watchlist'
        )}
      </div>
    </HomeLayout>
  )
}
