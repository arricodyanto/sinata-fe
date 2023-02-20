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
  const primary = '#0ea5e9'
  const pending = '#f59e0b'
  const complete = '#22c55e'
  const data = [
    { x: 'Jan', y: 40 },
    { x: 'Feb', y: 30 },
    { x: 'Mar', y: 45 },
    { x: 'Apr', y: 50 },
    { x: 'May', y: 35 },
    { x: 'Jun', y: 55 },
  ];
  const data1 = [
    { x: 'Jan', y: 1 },
    { x: 'Feb', y: 2 },
    { x: 'Mar', y: 1 },
    { x: 'Apr', y: 3 },
    { x: 'May', y: 2 },
    { x: 'Jun', y: 3 },
  ];
  const data2 = [
    { x: 'Jan', y: 71 },
    { x: 'Feb', y: 23 },
    { x: 'Mar', y: 63 },
    { x: 'Apr', y: 51 },
    { x: 'May', y: 27 },
    { x: 'Jun', y: 33 },
  ]
  return (
    <>
      <Box className='bg-grey'>
        <TitlePage title='Dashboard User - Sinata' />
        <DashboardUser>
          <HeaderBreadcrumbs pageHeader='Dashboard' currentPage='Dashboard' />
          <Grid container spacing={4} className='mb-8'>
            <Grid item xs={12} md={4}>
              <FlowCard text={dark} lineColor={primary} data={data} headline='Layanan diajukan' icon={<ArrowCircleDownOutlinedIcon fontSize='large' className='text-primary'/>} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FlowCard text={dark} lineColor={pending} data={data1} headline='Layanan dalam proses' icon={<PendingOutlinedIcon fontSize='large' className='text-pending'/>} />
            </Grid>
            <Grid item xs={12} md={4}>
              <FlowCard text={dark} lineColor={complete} data={data2} headline='Layanan selesai' icon={<CheckCircleOutlinedIcon fontSize='large' className='text-complete'/>} />
            </Grid>
          </Grid>
        </DashboardUser>
      </Box>
    </>
  )
}
