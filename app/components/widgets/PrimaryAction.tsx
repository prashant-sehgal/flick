import React from 'react'
import Link from 'next/link'

import styles from './widgets.module.css'

interface Props {
  children: React.ReactNode
  href?: string
  onPress?: () => void
  width?: number
  height?: number
  fontSize?: number
}

export default function PrimaryAction(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    width: props.width ? `${props.width}rem` : '100%',
    height: props.height ? `${props.height}rem` : '2.5rem',
    fontSize: props.fontSize ? `${props.fontSize}rem` : '1rem',
  }

  if (props.href)
    return (
      <Link style={style} className={styles.primaryAction} href={props.href}>
        {props.children}
      </Link>
    )

  return (
    <button
      style={style}
      className={styles.primaryAction}
      onClick={() => (props.onPress ? props.onPress() : '')}
    >
      {props.children}
    </button>
  )
}
