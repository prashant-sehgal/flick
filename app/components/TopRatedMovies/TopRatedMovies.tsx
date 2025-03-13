import React from 'react'
import MovieListView from '../MovieListView/MovieListView'

export default async function TopRatedMovies() {
  const response = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/api/v1/movies?sort=-imdbRating&limit=10`,
      { credentials: 'include' }
    )
  ).json()

  if (response.status !== 'success') throw new Error('Something went wrong')

  const movies = response.data.documents

  return <MovieListView movies={movies} title="Top Rated On IMDb" spacing />
}
