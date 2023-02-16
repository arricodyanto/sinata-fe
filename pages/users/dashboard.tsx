import { Box, Grid, Paper, Typography } from '@mui/material'
import dynamic from 'next/dynamic';
import React from 'react'
import TitlePage from '../../components/atoms/TitlePage'
import FlowCard from '../../components/molecules/FlowCard'
import HeaderBreadcrumbs from '../../components/molecules/HeaderBreadcrumbs'
import DashboardUser from '../../components/organism/DashboardUser'
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

export default function Dashboard() {
  const dark = '#1f2937'
  return (
    <>
      <Box className='bg-grey'>
        <TitlePage title='Dashboard User - Sinata' />
        <DashboardUser>
          <HeaderBreadcrumbs pageHeader='Dashboard' currentPage='Dashboard' />
          <Grid container spacing={4} className='mb-8'>
            <Grid item xs={12} md={4}>
              <FlowCard text={dark} icon={<ArrowCircleDownOutlinedIcon fontSize='large' className='text-primary'/>} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FlowCard text={dark} icon={<PendingOutlinedIcon fontSize='large' className='text-pending'/>} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FlowCard text={dark} icon={<CheckCircleOutlinedIcon fontSize='large' className='text-complete'/>} />
            </Grid>
          </Grid>
        </DashboardUser>
      </Box>
    </>
  )
}
