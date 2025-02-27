import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'

export default function SignOut() {
  const { data: session } = useSession()
  return (
    <button className={styles.logout} onClick={() => signOut()}>
      <Image
        src={session?.user?.image || ''}
        alt="user-img"
        width={32}
        height={32}
      />
      <p>Sign Out</p>
    </button>
  )
}
