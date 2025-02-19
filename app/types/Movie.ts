export default interface Movie {
  id: string
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
  slug: string
  featured: boolean
  posterUrl: string
  createdAt: Date
  updatedAt: Date
}
