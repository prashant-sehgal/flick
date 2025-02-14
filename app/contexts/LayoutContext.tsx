'use client'
import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

interface LayoutContextType {
  width?: number
  height?: number
}

interface Props {
  children: React.ReactNode
}

const layoutContext = createContext<LayoutContextType | undefined>(undefined)

export default function LayoutProvider(props: Readonly<Props>) {
  const [width, setWidth] = useState<number | undefined>()
  const [height, setHeight] = useState<number | undefined>()

  useEffect(function () {
    function updateLayout() {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
    updateLayout()

    window.addEventListener('resize', updateLayout)

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateLayout)
    }
  }, [])

  return (
    <layoutContext.Provider value={{ width, height }}>
      {props.children}
    </layoutContext.Provider>
  )
}

export function useLayout() {
  const context = useContext(layoutContext)
  if (context === undefined)
    throw new Error('useLayout hook must be used within a LayoutProvider')

  return context
}
