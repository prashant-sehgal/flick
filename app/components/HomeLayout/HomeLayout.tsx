import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface Props {
  children: React.ReactNode
}

export default function HomeLayout(props: Readonly<Props>) {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
