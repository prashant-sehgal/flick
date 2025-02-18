import React from 'react'
import styles from './PrimaryButton.module.css'
import Link from 'next/link'

interface Props {
  children: React.ReactNode
  onPress?: () => void
  width?: number
  href?: string
}

export default function PrimaryButton(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    width: props.width ? `${props.width}rem` : '100%',
  }

  if (props.href)
    return (
      <Link className={styles.primaryButton} style={style} href={props.href}>
        {props.children}
      </Link>
    )

  return (
    <button
      className={styles.primaryButton}
      style={style}
      onClick={() => props.onPress && props.onPress()}
    >
      {props.children}
    </button>
  )
}
