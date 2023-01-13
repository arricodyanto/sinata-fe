import { Box } from '@mui/material'
import React from 'react'
import EventCard from '../../molecules/EventCard'

export default function DaisyCarousel() {
  return (
    <Box className='carousel carousel-center p-2' gap={2}>
        <Box className='carousel-item'>
            <EventCard eventDate='13 Jan 2023' eventTime='08:00' eventImage='/images/hero-1.jpg' eventTitle='Event 1' eventDesc='Lorem, ipsum dolor sit amet consectetur adipisicing.' eventLink='/'/>
        </Box>
        <Box className='carousel-item'>
            <EventCard eventDate='13 Jan 2023' eventTime='17:00' eventImage='/images/hero-2.jpg' eventTitle='Event 2' eventDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quaerat repellendus aliquid minima deserunt quae et officia molestiae! Reiciendis praesentium ipsam fugiat magni qui deserunt iure voluptate at dicta vero laboriosam perspiciatis, accusamus, velit harum officia error ullam architecto pariatur laudantium, dolor eligendi. Alias dignissimos distinctio a eaque quis incidunt non veritatis nemo itaque, possimus temporibus facere qui molestiae et fugiat harum nulla, odio quia id laboriosam eligendi neque ad?' eventLink='/'/>
        </Box>
        <Box className='carousel-item'>
            <EventCard eventDate='14 Jan 2023' eventTime='11:00' eventImage='/images/hero-3.jpg' eventTitle='Event 3' eventDesc='Lorem, ipsum dolor sit amet consectetur adipisicing.' eventLink='/'/>
        </Box>
    </Box>
  )
}
