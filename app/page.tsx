import styles from './page.module.css'
import Logo from './components/Logo'

export default function Home() {
  return (
    <div className={styles.page}>
      <Logo />
    </div>
  )
}
