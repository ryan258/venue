import React from 'react'
import { Fade } from 'react-awesome-reveal'

const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade triggerOnce>
        <div className="font_righteous footer_logo_venue">The Venue</div>
        <div className="footer_copyright">The Venue &copy;2021 All Rights Reserved</div>
      </Fade>
    </footer>
  )
}

export default Footer
