'use client'
import { createContext, useContext, useEffect, useReducer } from 'react'
import Movie from '@/app/types/Movie'

interface MoviesContextType {
  movies: Movie[] | undefined
  featuredMovies: Movie[] | undefined
  latestMovies: Movie[] | undefined
  topRatedMovies: Movie[] | undefined
  actionMovies: Movie[] | undefined
  comedyMovies: Movie[] | undefined
  dramaMovies: Movie[] | undefined
  sciFiMovies: Movie[] | undefined
  adventureMovies: Movie[] | undefined
  fantasyMovies: Movie[] | undefined
  searchMovies?: (movies: Movie[], query: string) => Movie[]
}

const MoviesContext = createContext<MoviesContextType | undefined>(undefined)
const initialState: MoviesContextType = {
  movies: undefined,
  featuredMovies: undefined,
  latestMovies: undefined,
  topRatedMovies: undefined,
  actionMovies: undefined,
  comedyMovies: undefined,
  dramaMovies: undefined,
  sciFiMovies: undefined,
  adventureMovies: undefined,
  fantasyMovies: undefined,
  searchMovies: function (movies: Movie[], query: string): Movie[] {
    if (!query.trim() || !movies) return []

    const keywords = query.toLowerCase().split(/\s+/)

    return movies.filter((movie) => {
      const title = movie.title.toLowerCase()
      const description = movie.description.toLowerCase()

      return keywords.some(
        (keyword) => title.includes(keyword) || description.includes(keyword)
      )
    })
  },
}

function reducer(
  state: MoviesContextType,
  action: { type: 'SET_MOVIES' | 'REFRESH_MOVIES'; payload: Movie[] }
) {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
        featuredMovies: action.payload.filter((movie) => movie.featured),
        latestMovies: [...action.payload].sort(
          (a, b) => b.releasedYear - a.releasedYear
        ),
        topRatedMovies: [...action.payload].sort(
          (a, b) => b.imdbRating - a.imdbRating
        ),
        actionMovies: action.payload.filter(
          (movie) => movie.genres[0].toLowerCase() === 'action'
        ),
        adventureMovies: action.payload.filter(
          (movie) => movie.genres[0].toLowerCase() === 'adventure'
        ),
        sciFiMovies: action.payload.filter(
          (movie) => movie.genres[0].toLowerCase() === 'sci-fi'
        ),
        fantasyMovies: action.payload.filter(
          (movie) => movie.genres[0].toLowerCase() === 'fantasy'
        ),
        dramaMovies: action.payload.filter(
          (movie) => movie.genres[0].toLowerCase() === 'drama'
        ),
        comedyMovies: action.payload.filter(
          (movie) => movie.genres[0].toLowerCase() === 'comedy'
        ),
      }
    default:
      return state
  }
}

export default function MoviesProvider(props: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(function () {
    async function fetchMovies() {
      try {
        const response = await (
          await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/v1/movies`)
        ).json()

        if (response.status === 'success') {
          dispatch({ type: 'SET_MOVIES', payload: response.data.documents })
        }
      } catch (error: any) {
        throw new Error(error.message)
      }
    }
    fetchMovies()
  }, [])

  return (
    <MoviesContext.Provider value={state}>
      {props.children}
    </MoviesContext.Provider>
  )
}

export function useMovies() {
  const context = useContext(MoviesContext)

  if (context === undefined) {
    throw new Error('useMovies must be used within a MoviesProvider')
  }
  return context
}
