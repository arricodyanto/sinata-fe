import React from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, timelineOppositeContentClasses, TimelineSeparator } from '@mui/lab'
import { Stack } from '@mui/material'

type TTimelineUpdatesProps = {
  date: string,
  children?: React.ReactNode
}

export default function TimelineUpdates(props: TTimelineUpdatesProps) {
  const { date, children } = props
  return (
    <>
      <Timeline sx={{[`& .${timelineOppositeContentClasses.root}`]:{ flex: 0.2 }}} className='-mt-3'>
        <Stack direction='column-reverse'>
          <TimelineItem>
            <TimelineOppositeContent color='text.secondary'>
              {date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='primary'/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              {children}
            </TimelineContent>
          </TimelineItem>
        </Stack>
      </Timeline>
    </>
  )
}
