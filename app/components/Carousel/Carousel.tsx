import React from 'react'
import Movie from '@/app/types/Movie'
import Slide from './Slide'
import Slider from './Slider'

export default async function Carousel() {
  const response = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URI}/api/v1/movies?featured=true`,
      { credentials: 'include' }
    )
  ).json()

  if (response.status !== 'success') throw new Error('Something went wrong')

  const movies: Movie[] = response.data.documents

  return (
    <Slider>
      {movies.map((movie) => (
        <Slide movie={movie} key={movie._id} />
      ))}
    </Slider>
  )
}
