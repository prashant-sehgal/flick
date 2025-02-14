import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MovieListView from '../components/MovieListView/MovieListView'

export default function page() {
  return (
    <div className="page">
      <Navbar />
      <MovieListView title="New Releases" />
      <MovieListView title="Top Movies" />
      <MovieListView title="Explosive Action" />
      <MovieListView title="Dare to Explore" />
      <MovieListView title="Mind-Bending Sci-Fi" />
      <MovieListView title="Enchanted Worlds" />
      <MovieListView title="Tales of the Heart" />
      <MovieListView title="Hilarious Hits" />
    </div>
  )
}
