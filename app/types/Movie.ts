export default interface Movie {
  _id: string
  title: string
  description: string
  duration: number
  imdbRating: number
  genres: string[]
  releasedYear: number
  featured: boolean
  card: string
  slug: string
  poster: string
  media: string
}
