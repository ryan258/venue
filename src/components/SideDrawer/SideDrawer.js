import React from 'react'
import { scroller } from 'react-scroll'

import { Drawer, List, ListItem } from '@material-ui/core'

const SideDrawer = ({ open, onClose }) => {
  const links = [
    { where: 'featured', value: 'To Top' },
    { where: 'venueInfo', value: 'Venue Info' },
    { where: 'highlights', value: 'Highlights' },
    { where: 'pricing', value: 'Pricing' },
    { where: 'location', value: 'Location' }
  ]

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150
    })
    onClose(false)
  }

  const renderItem = (item) => (
    <ListItem button onClick={() => scrollToElement(item.where)} key={item.where}>
      {item.value}
    </ListItem>
  )

  return (
    <Drawer anchor="right" open={open} onClose={() => onClose(false)}>
      <List component="nav">{links.map((item) => renderItem(item))}</List>
    </Drawer>
  )
}

export default SideDrawer
