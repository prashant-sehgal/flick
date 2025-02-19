import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Loading() {
  return (
    <div>
      <Skeleton
        width="100%"
        height="100vh"
        borderRadius={0}
        baseColor="#14171f"
        highlightColor="#262c3b"
        //   enableAnimation={false}
      />
    </div>
  )
}
