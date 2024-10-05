import styles from './page.module.css'
import Navbar from './components/Navbar/Navbar'
import Carousel from './components/Carousel/Carousel'

export default function Home() {
  const movies = [
    {
      id: 0,
      title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
      description: `Blacksmith Will Turner teams up with eccentric pirate "Captain" Jack Sparrow to save Elizabeth Swann, the governor's daughter and his love, from Jack's former pirate allies, who are now undead.`,
      posters: ['Pirates_of_the_Caribbean_The_Curse_of_the _Black_Pearl.webp'],
      genres: ['Sea Adventure'],
      releaseYear: 2012,
      duration: '2h 23m',
    },
    {
      id: 1,
      title: 'Avatar: The Way of Water',
      description:
        "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
      posters: ['/poster-wide.webp', '/poster.webp'],
      genres: ['Action Epic'],
      releaseYear: 2022,
      duration: '3h 12m',
    },
  ]
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <Carousel movies={movies} />
      </div>
    </div>
  )
}
