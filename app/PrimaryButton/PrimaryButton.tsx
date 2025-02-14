import React from 'react'
import styles from './PrimaryButton.module.css'

interface Props {
  children: React.ReactNode
  onPress: () => void
  width?: number
}

export default function PrimaryButton(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    width: props.width ? `${props.width}rem` : '100%',
  }
  return (
    <button
      className={styles.primaryButton}
      style={style}
      onClick={() => props.onPress()}
    >
      {props.children}
    </button>
  )
}
