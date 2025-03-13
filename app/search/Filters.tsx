import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

interface Props {
  setter: (value: string) => void
}

export default function Filters(props: Readonly<Props>) {
  return (
    <div className={styles.filters}>
      <Link href="" onClick={(e) => props.setter('action')}>
        Action
      </Link>
      <Link href="" onClick={(e) => props.setter('adventure')}>
        Adventure
      </Link>
      <Link href="" onClick={(e) => props.setter('sci-fi')}>
        Sci Fi
      </Link>
      <Link href="" onClick={(e) => props.setter('comedy')}>
        Comedy
      </Link>
      <Link href="" onClick={(e) => props.setter('fantasy')}>
        Fantasy
      </Link>
      <Link href="" onClick={(e) => props.setter('drama')}>
        Drama
      </Link>
    </div>
  )
}
