'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import Layout from './Layout'
import IMDb from './IMDb'
import PrimaryAction from '@/app/components/PrimaryAction/PrimaryAction'
import Movie from '@/app/types/Movie'
import Loading from '@/app/components/Loading/Loading'
import formatDuration from '@/app/utils/formatDuration'
import getPosterUri from '@/app/utils/getPosterUri'
import { signIn, useSession } from 'next-auth/react'

interface Props {
  params: { movieSlug: string }
}

export default function page(props: Readonly<Props>) {
  const [movie, setMovie] = useState<Movie | undefined>()
  const { data: session } = useSession()

  useEffect(function () {
    async function fetchMovie() {
      try {
        const response = await (
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URI}/api/v1/movies?slug=${props.params.movieSlug}`
          )
        ).json()

        if (response.status === 'success') setMovie(response.data.documents[0])
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
    fetchMovie()
  }, [])

  if (!movie) return <Loading height="100vh" />

  return (
    <Layout backgroundImage={getPosterUri(movie.poster)}>
      <div className={styles.page}>
        <p>
          {movie.genres.map((genre, i) => (
            <>
              {genre}
              {movie.genres.length - 1 !== i ? ' / ' : ''}
            </>
          ))}
        </p>
        <h1>{movie.title}</h1>
        <p>
          {movie.releasedYear} / {formatDuration(movie.duration)}
        </p>
        <p>{movie.description}</p>
        <IMDb ratings={movie.imdbRating} />
        <div className={styles.actions}>
          {session && session.user ? (
            <>
              <PrimaryAction
                href={`/player/${movie.slug}`}
                height={3}
                fontSize={1}
              >
                Play Now
              </PrimaryAction>
              <PrimaryAction href="/player/movie" height={3} fontSize={1}>
                Add To Watchlist
              </PrimaryAction>
            </>
          ) : (
            <PrimaryAction
              onPress={() => signIn('google')}
              height={3}
              fontSize={1}
            >
              Unlock the Show - Sign In
            </PrimaryAction>
          )}
        </div>
      </div>
    </Layout>
  )
}
