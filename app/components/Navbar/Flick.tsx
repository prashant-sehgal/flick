import React from 'react'
import { Archivo_Black } from 'next/font/google'

const archivoBlack = Archivo_Black({
  weight: ['400'],
  subsets: ['latin'],
})

interface Props {
  size?: number
}

export default function Flick(props: Readonly<Props>) {
  const style: React.CSSProperties = {
    fontSize: props.size ? `${props.size}rem` : '2rem',
  }

  return (
    <p className={archivoBlack.className} style={style}>
      FLICK
    </p>
  )
}
