import React from 'react'
import styles from './page.module.css'
import MovieListView from '@/app/components/MovieListView/MovieListView'
import { useMovies } from '@/app/contexts/MovieContext'

interface Props {
  children: React.ReactNode
  backgroundImage: string
}

export default function Layout(props: Readonly<Props>) {
  const { featuredMovies } = useMovies()
  return (
    <div className={styles.layout}>
      <div className={styles.overlay}>
        {props.children}
        <MovieListView title="You May Also Like" movies={featuredMovies} />
      </div>
      <img src={props.backgroundImage} alt="background" />
    </div>
  )
}
