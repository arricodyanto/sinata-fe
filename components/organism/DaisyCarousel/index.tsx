import { Box } from '@mui/material'
import React from 'react'
import EventCard from '../../molecules/EventCard'
import event from '../../../json/events.json'

export default function DaisyCarousel() {
  return (
    <Box className='carousel carousel-center py-2 px-6' gap={2}>
        <>
            { event.map((item) =>  {
                return (
                    <Box key={item.id} className='carousel-item'>
                        <EventCard eventDate={item.date} eventTime={item.date} eventImage={item.image} eventTitle={item.title} eventDesc={item.description} eventLink={item.link}/>
                    </Box>
                )
            })}
        </>        
    </Box>
  )
}
