import Link from 'next/link'
import React, {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './page.module.css'
import EdgeButton from '../components/EdgeButton/EdgeButton'
import { useRouter } from 'next/navigation'

interface Props {
  setter: (value: string) => void
}

export default function SearchForm(props: Readonly<Props>) {
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    props.setter(input)
  }

  function navigateToHome() {
    router.push('/')
  }

  useEffect(function () {
    inputRef.current?.focus()
  }, [])

  return (
    <form className={styles.searchForm} onSubmit={onSubmitForm}>
      <EdgeButton onPress={navigateToHome} width={3} fontSize={1.4}>
        <i className="ri-arrow-left-s-line"></i>
      </EdgeButton>
      <input
        type="text"
        value={input}
        placeholder="Search for movies, shows, genres, or actors and start your next streaming adventure!"
        onChange={(event) => setInput(event.target.value)}
        ref={inputRef}
      />
    </form>
  )
}
