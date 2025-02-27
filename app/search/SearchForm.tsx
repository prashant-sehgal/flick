import Link from 'next/link'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import styles from './page.module.css'

interface Props {
  onSubmitForm: (query: string) => void
}

export default function SearchForm(props: Readonly<Props>) {
  const [input, setInput] = useState('')
  const inputElement = useRef<HTMLInputElement>()

  useEffect(function () {
    if (inputElement) inputElement.current?.focus()
  }, [])

  return (
    <form action="">
      <Link href="/">
        <i className="ri-arrow-left-s-line"></i>
      </Link>
      <input
        ref={inputElement! as React.LegacyRef<HTMLInputElement>}
        type="text"
        value={input}
        placeholder="Search for movies, shows, genres, or actors and start your next streaming adventure!"
        onChange={(event) => setInput(event.target.value)}
      />
    </form>
  )
}
