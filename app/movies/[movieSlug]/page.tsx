import React from 'react'
import styles from './page.module.css'
import Layout from './Layout'
import IMDb from './IMDb'
import Movie from '@/app/types/Movie'
import formatDuration from '@/app/utils/formatDuration'
import getPosterUri from '@/app/utils/getPosterUri'
import Actions from './Actions'
import Loading from '@/app/components/Loading/Loading'

interface Props {
  params: { movieSlug: string }
}

export default async function page(props: Readonly<Props>) {
  const response = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/api/v1/movies?slug=${props.params.movieSlug}`,
      { cache: 'no-store' }
    )
  ).json()

  const movie: Movie = response.data.documents[0]

  return (
    <Layout backgroundImage={getPosterUri(movie.poster)}>
      <div className={styles.page}>
        <p>
          {movie.genres.map((genre, i) => (
            <React.Fragment key={i}>
              {genre}
              {movie.genres.length - 1 !== i ? ' / ' : ''}
            </React.Fragment>
          ))}
        </p>
        <h1>{movie.title}</h1>
        <p>
          {movie.releasedYear} / {formatDuration(movie.duration)}
        </p>
        <p>{movie.description}</p>
        <IMDb ratings={movie.imdbRating} />
        <Actions movie={movie} />
      </div>
    </Layout>
  )
}
