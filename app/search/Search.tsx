import React, { LegacyRef, useEffect, useRef, useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'

interface Props {
  setter: (value: string) => void
}

export default function Search(props: Readonly<Props>) {
  const [search, setSearch] = useState('')
  const inputSearch = useRef<HTMLInputElement>()

  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (search) props.setter(search)
    inputSearch.current?.blur()
  }

  useEffect(function () {
    inputSearch.current?.focus()
  }, [])

  return (
    <div className={styles.search}>
      <Link href="/" className={styles.backButton}>
        <i className="ri-arrow-left-s-line"></i>
      </Link>
      <form onSubmit={onSubmitHandler} className={styles.searchForm}>
        <input
          type="text"
          value={search}
          placeholder="Find your next favorite movie or series..."
          onChange={(event) => setSearch(event.target.value)}
          className={styles.searchBox}
          ref={inputSearch! as LegacyRef<HTMLInputElement>}
        />
      </form>
    </div>
  )
}
