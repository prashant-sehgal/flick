import React from 'react'
import MovieListView from '../MovieListView/MovieListView'

export default async function FeaturedMovies() {
  const response = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/api/v1/movies?featured=true`,
      { credentials: 'include' }
    )
  ).json()

  if (response.status !== 'success') throw new Error('Something went wrong')

  const movies = response.data.documents

  return <MovieListView movies={movies} title="Your Perfect Picks" spacing />
}
