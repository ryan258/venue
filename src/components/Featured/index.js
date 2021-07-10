import React from 'react'

import Carousel from './Carousel'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const Featured = () => {
  return (
    <div className="featured_container">
      <Carousel />
      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>
    </div>
  )
}

export default Featured
