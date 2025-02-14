import { Archivo_Black } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
})

export default function BrandAnchor() {
  const style: React.CSSProperties = {
    fontSize: '1.8rem',
    color: 'var(--font-color)',
  }
  return (
    <Link className={archivoBlack.className} href="/" style={style}>
      FLICK
    </Link>
  )
}
