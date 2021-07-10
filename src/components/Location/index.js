import React from 'react'

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6428.29666883011!2d-94.22081008691767!3d36.33295464977822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c911d8e9db4f4d%3A0xb204b50d1967d3e8!2sThe%20Venue%20NWA!5e0!3m2!1sen!2sus!4v1625947117070!5m2!1sen!2sus" width="100%" height="500px" allowfullscreen frameBorder="0" title="Google Maps!" style={{ display: 'block' }}></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  )
}

export default Location
