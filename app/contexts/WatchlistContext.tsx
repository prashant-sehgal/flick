'use client'
import {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import Movie from '../types/Movie'
import { useSession } from 'next-auth/react'

interface WatchlistContextType {
  watchlist: Movie[]
  updateWatchlist?: (movie: Movie, method: 'add' | 'remove') => void
}

const WatchlistContext = createContext<WatchlistContextType>({
  watchlist: [],
})

export default function WatchlistProvider(props: {
  children: React.ReactNode
}) {
  const [watchlist, setWatchlist] = useState<Movie[]>([])
  const { data: session } = useSession()

  useEffect(
    function () {
      async function fetchWatchlist() {
        try {
          const response = await (
            await fetch(
              `${process.env.NEXT_PUBLIC_API_URI}/api/v1/users/watchlist`,
              {
                credentials: 'include',
              }
            )
          ).json()

          if (response.status === 'success')
            setWatchlist(response.data.watchlist)
        } catch (error: any) {
          throw new Error(error.message)
        }
      }

      if (session?.user) fetchWatchlist()
    },
    [session]
  )

  async function updateWatchlistDB(movie: Movie, method: 'add' | 'remove') {
    try {
      const response = await (
        await fetch(
          `${process.env.NEXT_PUBLIC_API_URI}/api/v1/users/watchlist/${method}`,
          {
            method: 'PATCH',
            body: JSON.stringify({ movieId: movie._id }),
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
      ).json()

      console.log(response)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  function updateWatchlist(movie: Movie, method: 'add' | 'remove') {
    if (method === 'add') {
      method === 'add' && setWatchlist([...watchlist, movie])
      updateWatchlistDB(movie, 'add')
    }
    if (method === 'remove') {
      setWatchlist(watchlist.filter((movieEl) => movieEl._id !== movie._id))
      updateWatchlistDB(movie, 'remove')
    }
  }

  return (
    <WatchlistContext.Provider value={{ watchlist, updateWatchlist }}>
      {props.children}
    </WatchlistContext.Provider>
  )
}

export function useWatchlist() {
  const context = useContext(WatchlistContext)

  if (context === undefined) {
    throw new Error('useWatchlist must be used within a WatchlistProvider')
  }
  return context
}
