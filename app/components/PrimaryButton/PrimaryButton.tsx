import React from 'react'
import styles from './PrimaryButton.module.css'

interface Props {
  children: string
  onPress: Function
  width?: number
  height?: number
  fontSize?: number
}

export default function PrimaryButton({
  children,
  onPress,
  width,
  height = 2,
  fontSize = 0.8,
}: Props) {
  const style: React.CSSProperties = {
    width: `${width ? `${width}rem` : '100%'}`,
    height: `${height}rem`,
    fontSize: `${fontSize}rem`,
  }
  return (
    <button
      className={styles.primaryButton}
      onClick={() => onPress()}
      style={style}
    >
      {children}
    </button>
  )
}
