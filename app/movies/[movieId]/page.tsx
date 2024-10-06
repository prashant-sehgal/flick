import NavLayout from '@/app/components/layouts/NavLayout'
import React from 'react'

interface Props {
  params: { movieId: string }
}

export default function page({ params }: Props) {
  return <NavLayout>{params.movieId}</NavLayout>
}
