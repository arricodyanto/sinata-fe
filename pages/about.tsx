import { Box, Card, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import PageTitle from '../components/atoms/PageTitle'
import HeaderPages from '../components/molecules/HeaderPages'
import StaffCardItem from '../components/molecules/StaffCardItem'
import Footer from '../components/organism/Footer'

export default function About() {
  return (
    <>
        <Box className='bg-white'>
        <HeaderPages titlePage='Tentang Kami - Sistem Informasi Manajemen Pelayanan dan Berita' srcImg='/images/bg-about.jpg'/>
            <Container sx={{width: {xs: 380, sm: 760, lg: 1280}, marginBottom: 10}}>
                <PageTitle title='Tentang Kami' />
                <Image src='/images/dokumentasi-1.jpg' alt="Hero's Page" layout='responsive' width={200} height={100} className='rounded-lg shadow-lg'/>
                <Grid container spacing={2} sx={{ marginTop: { xs: 5, lg: 15 }}}>
                    <Grid item xs={12} sm={6} className='grid place-items-center'>
                        <Box sx={{ marginX: { xs: 0, sm: 0, lg: 5 }}}>
                            <Typography variant='h6' className='font-bold mb-2 italic text-center' >&quot;Membangun relasi dengan hati.&quot;</Typography>
                            <Typography variant='body1' className='text-center text-gray-500 px-6'>
                                Displaced fracture of base of second metacarpal bone. left hand, subsequent encounter for fracture with routine healing.
                                Driver of three-wheeled motor vehicle injured in collision with two- or three-wheeled motor vehicle in traffic accident, sequela.
                                Displaced comminuted fracture of shaft of ulna, right arm, subsequent encounter for closed fracture with routine healing.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ marginTop: { xs: 5, sm: 0 }}} className='bg-fixed'>
                        <Image src='/images/dokumentasi-2.jpg' alt="Side Image" layout='responsive' width={200} height={100} className='rounded-lg shadow-lg'/>
                    </Grid>
                </Grid>
            </Container>
            <Box className='bg-primary pb-20'>
                <Container sx={{width: {xs: 380, sm: 760, lg: 1280}}}>
                    <Box className='pt-10 pb-4'>
                        <Typography variant='h5' className='font-bold text-white'>Our Staff</Typography>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            <StaffCardItem />
                        </Grid>
                    </Box>
                </Container>
            </Box>
        <Footer />
        </Box>
    </>
  )
}
