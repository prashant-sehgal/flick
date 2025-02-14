import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function Filters() {
  const filters = [
    'Action',
    'Adventure',
    'Sci-fi',
    'Fantasy',
    'Drama',
    'Comedy',
  ]
  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <Link
          href={`/search/filter/${filter.toLowerCase()}`}
          className={styles.card}
          key={filter}
        >
          {filter}
        </Link>
      ))}
    </div>
  )
}
