import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Head from 'next/head'
import React from 'react'
import HeaderBox from '../components/molecules/HeaderBox'
import CoverSide from '../components/molecules/CoverSide'
import SignUpForm from '../components/organism/SignUpForm'
import Link from 'next/link'

export default function SignUp() {
  return (
    <>
        <Head>
            <title>Create a New Account - Sinata</title>
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
                        <HeaderBox header='Halo, Civitas Akademika!' subheader='Silakan melakukan proses pendaftaran untuk bisa melakukan ajuan pelayanan.' />
                        <SignUpForm />
                        {/* <Box>
                            <GoogleButton />
                        </Box> */}
                    </Grid>
                    <Grid item lg={6} sm={6} sx={{ display: { xs: 'none', sm: 'block', lg: 'block' },}} className='-my-8 relative'>
                        <CoverSide src='/images/auth-bg.jpg' sentence='&quot;Every civitas can publish theirs here!&quot;' subject='Public Relation UNS' />
                    </Grid>
                </Grid>
            </Box>
        </Container>
        <Box className='grid place-items-center'>
            <Typography variant='body2' className='text-gray-500'>Sudah memiliki akun? <Link href='/sign-in' className='text-sky-700 underline'>Sign in</Link></Typography>
        </Box>
    </>
  )
}
