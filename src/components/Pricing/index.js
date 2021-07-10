import React from 'react'
import MyButton from '../Utils/MyButton'

import { Zoom } from 'react-awesome-reveal'

const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ['Balcony', 'Medium', 'Star'],
    desc: ['Lorem ipsum dolor sit amet consectetur adipisicing elit sed cum.', 'Omnis laborum exercitationem quod fuga distinctio possimus doloremque autem minus hic.', 'Autem repellendus dignissimos impedit harum quod, porro aperiam esse, nobis provident, tempore?'],
    linkTo: ['https://github.com', 'https://google.com', 'https://apple.com'],
    delay: [500, 0, 750]
  }

  const showBoxes = () =>
    priceState.prices.map((item, i) => (
      <Zoom key={i} className="pricing_item" delay={priceState.delay[i]}>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${priceState.prices[i]}</span>
            <span>{priceState.position[i]}</span>
          </div>
          <div className="pricing_description">{priceState.desc[i]}</div>
          <div className="pricing_buttons">
            <MyButton text="Purchase" link={priceState.linkTo[i]} style={{ color: '#ffffff' }} />
          </div>
        </div>
      </Zoom>
    ))

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  )
}

export default Pricing
