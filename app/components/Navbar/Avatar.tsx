import { useSession, signOut } from 'next-auth/react'
import React from 'react'
import styles from './Navbar.module.css'

export default function Avatar() {
  const { data: session } = useSession()

  return (
    <button className={styles.avatar} onClick={() => signOut()}>
      <img src={session?.user?.image!} alt={session?.user?.image!} />
      <p>Logout</p>
    </button>
  )
}
