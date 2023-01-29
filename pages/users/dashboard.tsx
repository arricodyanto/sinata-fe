import { Box } from '@mui/material'
import React from 'react'
import TitlePage from '../../components/atoms/TitlePage'
import DashboardAppnav from '../../components/organism/DashboardAppnav'

export default function Dashboard() {
  return (
    <>
        <Box className='bg-light h-[1000px]'>
            <TitlePage title='Dashboard User - Sinata' />
            <DashboardAppnav />
        </Box>
    </>
  )
}
