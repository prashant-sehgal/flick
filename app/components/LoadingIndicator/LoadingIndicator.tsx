import React from 'react'
import styles from './LoadingIndicator.module.css'

export default function LoadingIndicator() {
  return (
    <div className={styles.container}>
      <i className="ri-loader-2-line"></i>
    </div>
  )
}
