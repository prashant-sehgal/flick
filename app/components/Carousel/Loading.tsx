import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Loading() {
  return (
    <Skeleton
      width="100%"
      height="75vh"
      borderRadius={0}
      baseColor="#14171f"
      highlightColor="#262c3b"
    />
  )
}
