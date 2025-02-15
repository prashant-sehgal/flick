import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styles from './page.module.css'

export default function Loading() {
  return (
    <div className={styles.loading}>
      <h3>Results</h3>
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
