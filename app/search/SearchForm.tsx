import Link from 'next/link'
import React, { useState } from 'react'
import styles from './page.module.css'

interface Props {
  onSubmitForm: (query: string) => void
}

export default function SearchForm(props: Readonly<Props>) {
  const [input, setInput] = useState('')

  return (
    <form action="">
      <Link href="/">
        <i className="ri-arrow-left-s-line"></i>
      </Link>
      <input
        type="text"
        value={input}
        placeholder="Search for movies, shows, genres, or actors and start your next streaming adventure!"
        onChange={(event) => setInput(event.target.value)}
      />
    </form>
  )
}
