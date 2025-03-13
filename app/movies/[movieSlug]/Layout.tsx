import React from 'react'
import styles from './page.module.css'
import FeaturedMovies from '@/app/components/FeaturedMovies/FeaturedMovies'

interface Props {
  children: React.ReactNode
  backgroundImage: string
}

export default function Layout(props: Readonly<Props>) {
  return (
    <div className={styles.layout}>
      <div className={styles.overlay}>
        {props.children}
        <FeaturedMovies />
      </div>
      <img src={props.backgroundImage} alt="background" />
    </div>
  )
}
