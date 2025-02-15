import React from 'react'
import styles from './MoviesListView.module.css'
import Skeleton from 'react-loading-skeleton'

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Skeleton
        width="100%"
        height={229}
        borderRadius={0}
        baseColor="#14171f"
        highlightColor="#262c3b"
        //   enableAnimation={false}
      />
    </div>
  )
}
