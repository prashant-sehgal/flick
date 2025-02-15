import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Buffer from './Buffer'

interface Props {
  children: React.ReactNode
}

export default function HomeLayout(props: Readonly<Props>) {
  return (
    <div>
      <Header />
      {props.children}
      <Buffer />
      <Footer />
    </div>
  )
}
