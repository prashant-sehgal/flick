import React from 'react'
import styles from './EdgeButton.module.css'

interface Props {
  children: React.ReactNode
  onPress: () => void
  width?: number
  fontSize?: number
}

export default function EdgeButton(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    width: props.width ? `${props.width}rem` : '100%',
    fontSize: props.fontSize ? `${props.fontSize}rem` : '.8rem',
  }
  return (
    <button
      className={styles.edgeButton}
      style={style}
      onClick={() => props.onPress()}
    >
      {props.children}
    </button>
  )
}
