import React from 'react'
import MovieListView from '../components/MovieListView/MovieListView'
import Navbar from '../components/Navbar/Navbar'

export default function page() {
  return (
    <div>
      <Navbar />
      <MovieListView title="Endless Entertainment" />
      <MovieListView title="Your Next Favorite Show" />
    </div>
  )
}
