import { Box } from '@mui/material'
import React from 'react'
import TitlePage from '../../components/atoms/TitlePage'
import DashboardAppnav from '../../components/organism/DashboardAppnav'

export default function Dashboard() {
  return (
    <>
        <Box className='bg-white'>
            <TitlePage title='Dashboard User - Sinata' />
            <DashboardAppnav />
        </Box>
    </>
  )
}
