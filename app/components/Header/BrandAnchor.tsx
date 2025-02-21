import { Archivo_Black } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
})

export default function BrandAnchor() {
  const style: React.CSSProperties = {
    color: '#fff',
    fontSize: '1.8rem',
  }
  return (
    <Link className={archivoBlack.className} style={style} href="/">
      FLICK
    </Link>
  )
}
