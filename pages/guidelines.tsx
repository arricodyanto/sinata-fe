import { Box, Container } from '@mui/material'
import React from 'react'
import PageTitle from '../components/atoms/PageTitle'
import HeaderPages from '../components/molecules/HeaderPages'

export default function GuideLines() {
  return (
    <Box className='bg-white'>
        <HeaderPages titlePage='Panduan - Sistem Informasi Manajemen Pelayanan dan Berita' srcImg='/images/bg-guides.jpg' />
        <Container sx={{width: {xs: 380, sm: 760, lg: 1280}}}>
            <PageTitle title='Panduan' />
        </Container>
    </Box>
  )
}
