import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import ContainerPage from '../components/atoms/ContainerPage'
import CoverSide from '../components/molecules/CoverSide'
import HeaderBox from '../components/molecules/HeaderBox'
import SignInForm from '../components/organism/SignInForm'

export default function SignIn() {
  return (
    <>
        <Head>
            <title>Sign in - Sinata</title>
        </Head>
        <Box className='grid place-items-center bg-light' sx={{height: {xs: '100vh'}}}>
            <ContainerPage className='lg:max-w-[1000px]'>
                <Box mt={2} gridColumn={2} className="border rounded-md bg-white shadow-lg">
                    <Grid container>
                        <Grid item lg={6} md={6} p={4}>
                            <HeaderBox header='Selamat Datang!' subheader='Silakan melakukan proses login untuk masuk ke dashboard Anda.' />
                            <SignInForm />
                            <Stack>
                                <Typography variant='body2' className='py-8 mx-auto'>atau</Typography>
                            </Stack>
                            {/* <Box>
                                <GoogleButton />
                            </Box> */}
                        </Grid>
                        <Grid item lg={6} md={6} sx={{ display: { xs: 'none', md: 'block', lg: 'block' },}} className='relative'>
                            <CoverSide src='/images/auth-bg.jpg' sentence='&quot;Everyday is a Good Day!&quot;' subject='Public Relation UNS' />
                        </Grid>
                    </Grid>
                </Box>
                <Box className='mt-4 mb-6'>
                    <Typography variant='body2' className='text-gray-500 text-center'>Belum memiliki akun? <Link href='/sign-up' className='text-sky-700 underline'>Sign Up</Link></Typography>
                </Box>
            </ContainerPage>
        </Box>
    </>
  )
}
