import Movie from '@/app/types/Movie'
import React from 'react'
import styles from './MovieListView.module.css'
import MovieCard from '../MovieCard/MovieCard'
import SliderProvider from './SliderProvider'

interface Props {
  title: string
  movies: Movie[]
  spacing?: boolean
}

export default function MovieListView(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    padding: props.spacing ? '1rem' : '0',
  }

  return (
    <div className={styles.movieListView} style={style}>
      <h3>{props.title}</h3>
      <SliderProvider>
        {props.movies.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </SliderProvider>
    </div>
  )
}
