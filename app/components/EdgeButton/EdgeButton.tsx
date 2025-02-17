import React from 'react'
import styles from './EdgeButton.module.css'

interface Props {
  children: React.ReactNode
  onPress: () => void
  width?: number
  height?: number
  fontSize?: number
  style?: React.CSSProperties
}

export default function EdgeButton(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    width: props.width ? `${props.width}rem` : '100%',
    height: props.height ? `${props.height}rem` : '3rem',
    fontSize: props.fontSize ? `${props.fontSize}rem` : '.8rem',
    ...props.style,
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
