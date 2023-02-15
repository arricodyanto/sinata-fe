import { Box, Grid, Paper, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import TitlePage from '../../components/atoms/TitlePage'
import HeaderBreadcrumbs from '../../components/molecules/HeaderBreadcrumbs'
import DashboardUser from '../../components/organism/DashboardUser'

export default function Dashboard() {
  return (
    <>
      <Box className='bg-light'>
        <TitlePage title='Dashboard User - Sinata' />
        <DashboardUser>
          <HeaderBreadcrumbs pageHeader='Dashboard' currentPage='Dashboard' />
          {/* <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Paper className='p-4 h-32 bg-sky-500'>

              </Paper>
            </Grid>
          </Grid> */}
        </DashboardUser>
      </Box>
    </>
  )
}
