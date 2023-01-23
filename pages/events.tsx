import { Box, Container } from '@mui/material'
import React from 'react'
import PageTitle from '../components/atoms/PageTitle'
import HeaderPages from '../components/molecules/HeaderPages'

export default function Events() {
  return (
    <Box className='bg-white'>
        <HeaderPages titlePage='Agenda - Sistem Informasi Manajemen Pelayanan dan Berita' srcImg='/images/bg-events.jpg' />
        <Container sx={{width: {xs: 380, sm: 760, lg: 1280}}}>
            <PageTitle title='Agenda' />
        </Container>
    </Box>
  )
}
