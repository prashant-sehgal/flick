'use client'
import { useEffect, useState } from 'react'

export default function useLayout() {
  const [width, setWidth] = useState<number>()
  const [height, setHeight] = useState<number>()

  function setLayout() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(
    function () {
      window.addEventListener('resize', setLayout)
      setLayout()

      // clean up
      return function () {
        window.removeEventListener('resize', setLayout)
      }
    },
    [setLayout]
  )

  return { width, height }
}
