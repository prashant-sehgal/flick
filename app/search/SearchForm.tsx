import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

interface Props {
  setter: (value: string) => void
}

export default function SearchForm(props: Readonly<Props>) {
  const [input, setInput] = useState('')
  const inputElement = useRef<HTMLInputElement>(null)

  function onSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    props.setter(input)
  }

  useEffect(function () {
    inputElement.current?.focus()
  }, [])

  return (
    <form onSubmit={onSubmitForm}>
      <Link href="/">
        <i className="ri-arrow-left-s-line"></i>
      </Link>
      <input
        ref={inputElement}
        type="text"
        placeholder="Search for movies, shows, genres, or actors and start your next streaming adventure!"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </form>
  )
}
