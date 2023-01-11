import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import CoverSide from '../components/molecules/CoverSide'
import HeaderBox from '../components/molecules/HeaderBox'
import SignInForm from '../components/organism/SignInForm'

export default function SignIn() {
  return (
    <>
        <Head>
            <title>Sign in - Sinata</title>
        </Head>
        <Container sx={{ width: {
            xs: 360,
            sm: 760,
            lg: 1100,
            },
        }}>
            <Box my={9} gridColumn={2} className="border rounded-md bg-white shadow-sm mb-4">
                <Grid container py={4}>
                    <Grid item lg={6} sm={6} px={4}>
                        <HeaderBox header='Selamat Datang!' subheader='Silakan melakukan proses login untuk masuk ke dashboard Anda.' />
                        <SignInForm />
                        <Stack>
                            <Typography variant='body2' className='py-8 mx-auto'>atau</Typography>
                        </Stack>
                        {/* <Box>
                            <GoogleButton />
                        </Box> */}
                    </Grid>
                    <Grid item lg={6} sm={6} sx={{ display: { xs: 'none', sm: 'block', lg: 'block' },}} className='-my-8 relative'>
                        <CoverSide src='/images/auth-bg.jpg' sentence='&quot;Everyday is a Good Day!&quot;' subject='Public Relation UNS' />
                    </Grid>
                </Grid>
            </Box>
        </Container>
        <Box className='grid place-items-center'>
            <Typography variant='body2' className='text-gray-500'>Belum memiliki akun? <Link href='/sign-up' className='text-sky-700 underline'>Sign Up</Link></Typography>
        </Box>
    </>
  )
}
