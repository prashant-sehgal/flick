import React from 'react'
import HomeLayout from '../components/HomeLayout/HomeLayout'
import MoviesListView from '../components/MoviesListView/MoviesListView'

export default function page() {
  return (
    <HomeLayout>
      <div className="page">
        <h3 style={{ textAlign: 'center', margin: 40 }}>
          <i className="ri-tv-line"></i> TV Shows comming soon...
        </h3>
      </div>
    </HomeLayout>
  )
}
