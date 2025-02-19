'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import HomeLayout from '@/app/components/HomeLayout/HomeLayout'
import Overlay from './Overlay'
import MoviesListView from '@/app/components/MoviesListView/MoviesListView'
import IMDb from './IMDb'
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButton'
import Movie from '@/app/types/Movie'
import useAPI from '@/app/hooks/useAPI'
import formatDuration from '@/app/utils/formatDuration'
import { useMovies } from '@/app/contexts/MoviesContext'
import Loading from './Loading'

interface Props {
  params: { movieId: string }
}

export default function page(props: Readonly<Props>) {
  const { getFeaturedMovies } = useMovies()
  const { client } = useAPI()
  const [movie, setMovie] = useState<Movie>()

  useEffect(
    function () {
      async function loadMovie() {
        const response = await client.get(`/movies/${props.params.movieId}`)

        if (response.status === 200) setMovie(response.data.data.document)
      }

      loadMovie()
    },

    [props.params.movieId]
  )

  return (
    <HomeLayout>
      {movie ? (
        <Overlay img={movie.posterUrl}>
          <div className={styles.movie}>
            <p className={styles.info}>
              {movie.genres.map((genre, i) => {
                return (
                  <React.Fragment key={i}>
                    {genre}
                    {movie.genres.length - 1 !== i && ' / '}
                  </React.Fragment>
                )
              })}
            </p>
            <p className={styles.title}>{movie.title}</p>
            <p className={styles.info}>
              {movie.releasedYear} / {formatDuration(movie.duration)}
            </p>
            <p className={styles.description}>{movie.description}</p>
            <IMDb ratings={movie.imdbRating} />
            <div className={styles.actions}>
              <PrimaryButton href={`/player/${movie.id}`}>
                Play Now <i className="ri-play-circle-line"></i>
              </PrimaryButton>
              <PrimaryButton onPress={() => ''}>
                Add To Watchlist <i className="ri-bookmark-3-line"></i>{' '}
              </PrimaryButton>
            </div>
          </div>
          <MoviesListView
            title="You May Also Like"
            movies={getFeaturedMovies()}
          />
        </Overlay>
      ) : (
        <Loading />
      )}
    </HomeLayout>
  )
}
