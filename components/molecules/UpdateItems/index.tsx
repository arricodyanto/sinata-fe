import React from 'react';
import { Stack, Typography } from '@mui/material';
import TimelineBottom from '../../atoms/TimelineBottom';
import TimelineUpdates from '../../atoms/TimelineUpdates';

export default function UpdateItems() {
  return (
    <> 
        <Stack direction='column-reverse'>
            <TimelineBottom />
            <TimelineUpdates date='12 Jan, 2023' version='v1.0.1'>
                <li>- Change header box image</li>
                <li>- Add public media file</li>
                <li>- Add navbar, hero</li>
            </TimelineUpdates> 
            <TimelineUpdates date='13 Jan, 2023' version='v1.0.2'>
                <li>- Styling mobile nav, hero, and paper</li>
            </TimelineUpdates> 
            <TimelineUpdates date='13 Jan, 2023' version='v1.0.3'>
                <li>- Center text paper</li>
                <li>- Update colors, scale</li>
            </TimelineUpdates>
            <TimelineUpdates date='14 Jan, 2023' version='v1.0.4'>
                <li>- Fix layout of the event calendar</li>
                <li>- Add carousel event card to landing page</li>
            </TimelineUpdates> 
            <TimelineUpdates date='17 Jan, 2023' version='v1.0.5'>
                <li>- Resize, add today&apos;s button to kalender agenda</li>
                <li>- Add calendar event under Kalendar Agenda, styling Agenda Terkini</li>
            </TimelineUpdates> 
            <TimelineUpdates date='18 Jan, 2023' version='v1.0.6'>
                <li>- Adding badge to date event on first month</li>
            </TimelineUpdates> 
            <TimelineUpdates date='19 Jan, 2023' version='v1.0.7'>
                <li>- Fix event filter by year</li>
                <li>- Update today&apos;s date</li>
                <li>- Add dynamic event mark on the calendar date</li>
            </TimelineUpdates> 
            <TimelineUpdates date='20 Jan, 2023' version='v1.0.8'>
                <li>- Adding footer component</li>
                <li>- Fix vh</li>
                <li>- Adding pengumuman system section, fix height of sign-in sign-up page</li>
            </TimelineUpdates> 
            <TimelineUpdates date='21 Jan, 2023' version='v1.1.0'>
                <li>- Add about pages</li>
            </TimelineUpdates> 
            <TimelineUpdates date='21 Jan, 2023' version='v1.1.1'>
                <li>- Add staff section</li>
            </TimelineUpdates> 
            <TimelineUpdates date='23 Jan, 2023' version='v1.1.2'>
                <li>- Rev link of contact</li>
                <li>- Add contact section, add new line to footer</li>
            </TimelineUpdates> 
            <TimelineUpdates date='24 Jan, 2023' version='v1.2.0'>
                <li>- Add events page, guidelines page</li>
            </TimelineUpdates> 
            <TimelineUpdates date='25 Jan, 2023' version='v1.2.0'>
                <li>- Add page title</li>
            </TimelineUpdates> 
            <TimelineUpdates date='26 Jan, 2023' version='v1.2.1'>
                <li>- Fix .json</li>
                <li>- Add calendar events, today&apos;s event, tomorrow&apos;s event to agenda page</li>
            </TimelineUpdates> 
            <TimelineUpdates date='26 Jan, 2023' version='v1.2.2'>
                <li>- Add all events to event page</li>
                <li>- Restyling event card</li>
                <li>- Add date, time, location to event cards</li>
                <li>- Fix eventcard</li>
                <li>- Fix allevent cards</li>
            </TimelineUpdates> 
            <TimelineUpdates date='27 Jan, 2023' version='v1.2.2'>
                <li>- Fix avatar publisher on event card</li>
            </TimelineUpdates> 
            <TimelineUpdates date='27 Jan, 2023' version='v1.3.0'>
                <li>- Add panduan page</li>
            </TimelineUpdates> 
            <TimelineUpdates date='27 Jan, 2023' version='v1.3.1'>
                <li>- Update the accordion</li>
                <li>- Add faqs accordion to panduan page</li>
                <li>- Reverse expand icon</li>
            </TimelineUpdates> 
            <TimelineUpdates date='27 Jan, 2023' version='v1.3.2'>
                <li>- Add onclick event on infographics</li>
            </TimelineUpdates> 
            <TimelineUpdates date='28 Jan, 2023' version='v1.3.3'>
                <li>- Add Updates Log to halaman beranda</li>
                <li>- Update content of Updates Log</li>
                <li>- Disable on hover Updates Log</li>
            </TimelineUpdates> 
            <TimelineUpdates date='29 Jan, 2023' version='v1.4.0'>
                <li>- Add user&apos;s dashboard pages</li>
            </TimelineUpdates> 
            <TimelineUpdates date='29 Jan, 2023' version='v1.4.1'>
                <li>- Add user dashboard appbar</li>
                <li>- Add IconDrawer to Dashboard Appnav</li>
            </TimelineUpdates> 
            <TimelineUpdates date='30 Jan, 2023' version='v1.4.2'>
                <li>- Remove IconDrawer and replace it with IconPopover</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='31 Jan, 2023' version='v1.4.2'>
                <li>- Add Avatar Nav Icon to dashboard</li>
                <li>- Add different search icon base on device</li>
                <li>- Add fullscreen button to dasboard appnav</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='1 Feb, 2023' version='v1.4.2'>
                <li>- Add Input Search (unused yet)</li>
                <li>- Update responsive breakpoints</li>
            </TimelineUpdates> 
            <TimelineUpdates date='2 Feb, 2023' version='v1.4.2'>
                <li>- Fix all container width</li>
                <li>- Fix Dashboard Appnav</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='3 Feb, 2023' version='v1.4.2'>
                <li>- Update Sidebar Drawer for desktop device</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='5 Feb, 2023' version='v1.4.2'>
                <li>- Fix Dashboard Appnav for mobile device</li>
                <li>- Add blur, transparent effect to Dashboard Appnav after scrolling</li>
                <li>- Add Footer Dashboard</li>
                <li>- Add Sidebar Drawer Menu for mobile device</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='6 Feb, 2023' version='v1.4.2'>
                <li>- Add List Menu to Dashboard Appnav either on desktop device or mobile device</li>
                <li>- Add Menu Item to List Menu </li>
                <li>- Update Menu Item to Nested List Menu </li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='7 Feb, 2023' version='v1.4.2'>
                <li>- Update Sidebar Drawer Menu in collapsed for desktop device</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='10 Feb, 2023' version='v1.4.2'>
                <li>- Fix several Sidebar Drawer Menu in collapsed for desktop device</li>
                <li>- Fix content Sidebar Drawer Menu in collapsed for desktop device with Array</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='15 Feb, 2023' version='v1.4.3'>
                <li>- Add breadcrumbs and header page to dashboard</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='16 Feb, 2023' version='v1.4.4'>
                <li>- Add service Flow Card to next section in dashboard</li>
                <li>- Update Line Graph in Flow Card</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
            <TimelineUpdates date='20 Feb, 2023' version='v1.4.4'>
                <li>- Update line graph color, data graph</li>
                <li>- Add Headline Flowcard and the summary</li>
                <li>- Update Updates Log content</li>
            </TimelineUpdates> 
        </Stack>
    </>
  )
}
