import React from 'react'
import Skeleton from 'react-loading-skeleton'

interface Props {
  width?: number | string
  height?: number | string
}

export default function Loading(props: Readonly<Props>) {
  return (
    <Skeleton
      width={props.width}
      height={props.height}
      borderRadius={0}
      baseColor="#14171f"
      highlightColor="#262c3b"
    />
  )
}
