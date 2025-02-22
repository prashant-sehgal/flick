import React from 'react'
import styles from './page.module.css'
import MovieListView from '@/app/components/MovieListView/MovieListView'

interface Props {
  children: React.ReactNode
  backgroundImage: string
}

export default function Layout(props: Readonly<Props>) {
  return (
    <div className={styles.layout}>
      <div className={styles.overlay}>
        {props.children}
        <MovieListView title="You May Also Like" />
      </div>
      <img src={props.backgroundImage} alt="background" />
    </div>
  )
}
