import React, { useState, useEffect } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'

const Discount = () => {
  const endNumber = 30

  const [startNumber, setStartNumber] = useState(0)

  const percentage = () => {
    if (startNumber < endNumber) {
      setStartNumber((prevCount) => prevCount + 1)
    }
  }

  useEffect(() => {
    if (startNumber > 0 && startNumber < endNumber) {
      setTimeout(() => {
        setStartNumber((prevCount) => prevCount + 1)
      }, 30)
    }
  }, [startNumber])

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          // calls back a function when called
          onVisibilityChange={(inView) => {
            // console.log(inView)
            if (inView) {
              percentage()
            }
          }}
        >
          <div className="discount_percentage">
            <span>{startNumber}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase ticket before October 20th</h3>
            <p>Dolor sit amet consectetur adipisicing elit. Harum animi vel eum exercitationem optio consequatur alias magni tempora, perspiciatis dolore temporibus quas! Voluptatem dolorem delectus sit ipsam corporis, fugit culpa?</p>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Discount
