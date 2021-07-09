import React from 'react'

import { Drawer, List, ListItem } from '@material-ui/core'

const SideDrawer = ({ open, onClose }) => {
  const links = [
    { where: 'featured', value: 'To Top' },
    { where: 'venueInfo', value: 'Venue Info' },
    { where: 'hightlights', value: 'Highlights' },
    { where: 'pricing', value: 'Pricing' },
    { where: 'location', value: 'Location' }
  ]

  const renderItem = ({ value, where }) => (
    <ListItem button onClick={() => alert(where)} key={where}>
      {value}
    </ListItem>
  )

  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">{links.map((item) => renderItem(item))}</List>
    </Drawer>
  )
}

export default SideDrawer
