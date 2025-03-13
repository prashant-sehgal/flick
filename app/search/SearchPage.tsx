function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [query, setQuery] = useState('')
  const {
    movies,
    searchMovies,
    actionMovies,
    adventureMovies,
    comedyMovies,
    dramaMovies,
    fantasyMovies,
    sciFiMovies,
  } = useMovies()
  const [searchResults, setSearchResults] = useState<Movie[] | undefined>(
    undefined
  )

  function onSubmitForm(query: string) {
    setQuery(query)
  }

  useEffect(
    function () {
      router.push(`/search?query=${query}`)
    },
    [query]
  )

  useEffect(
    function () {
      const query = searchParams.get('query')
      const genre = searchParams.get('genre')

      if (query) {
        if (!movies || !searchMovies) return

        setSearchResults(searchMovies(movies, query))
      } else {
        switch (genre) {
          case 'action':
            setSearchResults(actionMovies)
            break
          case 'adventure':
            setSearchResults(adventureMovies)
            break
          case 'comedy':
            setSearchResults(comedyMovies)
            break
          case 'drama':
            setSearchResults(dramaMovies)
            break
          case 'fantasy':
            setSearchResults(fantasyMovies)
            break
          case 'sci-fi':
            setSearchResults(sciFiMovies)
            break
          default:
            setSearchResults(undefined)
        }
      }
    },
    [searchParams]
  )

  return (
    <div className={styles.page}>
      <SearchForm onSubmitForm={onSubmitForm} />
      <Filters />
      <div className={styles.moviesCotnainer}>
        {searchResults && (
          <MovieListView title="Results" movies={searchResults} />
        )}
      </div>
    </div>
  )
}
