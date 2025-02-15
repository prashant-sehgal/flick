export default interface Movie {
  title: string
  description: string
  releasedYear: number
  duration: number
  imdbRating: number
  genres: string[]
  card: string
  poster: string
  media: string
  cardUrl: string
  posterUrl: string
  createdAt: Date
  updatedAt: Date
}
