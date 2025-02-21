import Link from 'next/link'
import React from 'react'
import styles from './PrimaryAction.module.css'

interface Props {
  children: React.ReactNode
  onPress?: () => void
  href?: string
  width?: number
  height?: number
  fontSize?: number
}

export default function PrimaryAction(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    width: props.width ? `${props.width}rem` : '100%',
    height: props.height ? `${props.height}rem` : '100%',
    fontSize: props.fontSize ? `${props.fontSize}rem` : '.9rem',
  }

  if (props.onPress)
    return (
      <button
        className={styles.primaryAction}
        style={style}
        onClick={() => props.onPress && props.onPress()}
      >
        {props.children}
      </button>
    )
  if (props.href)
    return (
      <Link className={styles.primaryAction} style={style} href={props.href}>
        {props.children}
      </Link>
    )

  return (
    <p>Please provide onPress method or href link for PrimaryAction to work</p>
  )
}
