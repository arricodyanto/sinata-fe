import React from 'react'
import TimelineBottom from '../../atoms/TimelineBottom'
import TimelineUpdates from '../../atoms/TimelineUpdates'

export default function UpdateItems() {
  return (
    <> 
        <TimelineUpdates date='12 Jan, 2023'>
            <li>- Change header box image</li>
            <li>- Add public media file</li>
            <li>- Add navbar, hero</li>
        </TimelineUpdates> 
        <TimelineBottom />
    </>
  )
}
