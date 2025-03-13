import React from 'react'
import FeaturedMovies from '../components/FeaturedMovies/FeaturedMovies'
import styles from './page.module.css'

interface Props {
  children: React.ReactNode
}

export default function Layout(props: Readonly<Props>) {
  return (
    <div className={styles.page}>
      {props.children}
      <FeaturedMovies />
    </div>
  )
}
