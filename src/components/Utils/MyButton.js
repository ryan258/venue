import React from 'react'
import Button from '@material-ui/core/Button'

import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = ({ text, link, size, style, iconTicket }) => {
  return (
    <Button
      href={link}
      size={size || 'large'}
      variant="contained"
      style={{
        background: '#8e8e8e',
        color: '#ffffff',
        ...style
      }}
    >
      {iconTicket && <img src={TicketIcon} className="iconImage" alt="Ticket icon" />}

      {text}
    </Button>
  )
}

export default MyButton
