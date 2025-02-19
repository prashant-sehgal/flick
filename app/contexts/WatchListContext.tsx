'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import Movie from '../types/Movie'
import useAPI from '../hooks/useAPI'

interface Props {
  children: React.ReactNode
}

interface WatchListConextType {
  watchList: Movie[] | undefined
}

const WatchListContext = createContext<WatchListConextType | undefined>(
  undefined
)

export default function WatchListProvider(props: Readonly<Props>) {
  const { client } = useAPI()
  const [watchList, setWatchList] = useState<Movie[]>([])

  useEffect(function () {
    async function fetchWatchlist() {
      const response = await client.get('/watchlist')
    }
    fetchWatchlist()
  }, [])

  return (
    <WatchListContext.Provider value={{ watchList }}>
      {props.children}
    </WatchListContext.Provider>
  )
}

export function useWatchList() {
  const context = useContext(WatchListContext)
  if (!context)
    throw new Error(
      'useWatchList hook must be used within an WatchListProvider'
    )

  return context
}
