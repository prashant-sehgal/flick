'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useWatchlist } from '@/app/contexts/WatchlistContext'
import PrimaryAction from '@/app/components/PrimaryAction/PrimaryAction'
import Movie from '@/app/types/Movie'

interface Props {
  movie: Movie
}

export default function Actions(props: Readonly<Props>) {
  const [isWatchlisted, setIsWatchlisted] = useState(false)
  const { data: session } = useSession()
  const { watchlist, updateWatchlist } = useWatchlist()

  useEffect(
    function () {
      setIsWatchlisted(
        Boolean(
          watchlist.filter((movieEl) => movieEl._id === props.movie._id).length
        )
      )
    },
    [props.movie, watchlist]
  )

  return (
    <div className={styles.actions}>
      {session && session.user ? (
        <>
          <PrimaryAction
            href={`/player/${props.movie.slug}`}
            height={3}
            fontSize={1}
          >
            Play Now
          </PrimaryAction>
          {isWatchlisted ? (
            <PrimaryAction
              onPress={() =>
                updateWatchlist && updateWatchlist(props.movie, 'remove')
              }
              height={3}
              fontSize={1}
            >
              Remove from Watchlist
            </PrimaryAction>
          ) : (
            <PrimaryAction
              onPress={() =>
                updateWatchlist && updateWatchlist(props.movie, 'add')
              }
              height={3}
              fontSize={1}
            >
              Add to Watchlist
            </PrimaryAction>
          )}
        </>
      ) : (
        <PrimaryAction onPress={() => signIn('google')} height={3} fontSize={1}>
          Unlock the Show - Sign In
        </PrimaryAction>
      )}
    </div>
  )
}
