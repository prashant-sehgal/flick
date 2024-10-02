import React from 'react'
import { Archivo_Black } from 'next/font/google'

const archivo_black = Archivo_Black({ weight: '400', subsets: ['latin'] })

export default function Logo() {
  const style: React.CSSProperties = {
    fontSize: '1.6rem',
  }
  return (
    <p className={archivo_black.className} style={style}>
      FLICK
    </p>
  )
}
