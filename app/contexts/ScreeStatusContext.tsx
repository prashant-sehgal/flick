'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface ScreenStatusContextType {
  isDisplayVertical: boolean
  width: number | undefined
}

interface Props {
  children: React.ReactNode
}

const ScreenStatusContext = createContext<ScreenStatusContextType | undefined>(
  undefined
)

function ScreenStatusProvider({ children }: Props) {
  const [isDisplayVertical, setIsDisplayVertical] = useState(false)
  const [width, setWidth] = useState<number>()

  //   this effect will sync display orientation vertical or horizontal with isDisplay vertical state
  useEffect(function () {
    function handleResize() {
      setIsDisplayVertical(window.innerWidth < window.innerHeight)
      setWidth(window.innerWidth)
    }
    // running handleResize on initial render
    handleResize()
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    //   clean up
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <ScreenStatusContext.Provider value={{ isDisplayVertical, width }}>
      {children}
    </ScreenStatusContext.Provider>
  )
}

function useScreenStatus() {
  const context = useContext(ScreenStatusContext)
  if (!context)
    throw new Error('useScreenStatus must be used inside ScreenStatusProvider')

  return context
}

export { ScreenStatusProvider, useScreenStatus }
