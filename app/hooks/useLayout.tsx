'use client'
import { useEffect, useState } from 'react'

export default function useLayout() {
  const [width, setWidth] = useState<number>()
  const [height, setHeight] = useState<number>()

  useEffect(function () {
    function updateLayout() {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    updateLayout()

    window.addEventListener('resize', updateLayout)

    // clean up
    return function () {
      window.removeEventListener('resize', updateLayout)
    }
  }, [])

  return { width, height }
}
