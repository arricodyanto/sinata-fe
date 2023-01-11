import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Box, Grid, Paper, Stack, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

function ElevationScroll(props: any) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true, //Whether or not there is a little delay when the user is scrolling.
    threshold: 100, //0 means trigger the event listener as soon as the user starts scrolling.
      //Default to 100 which means scrolling further down before the even listener triggers. It controls how far the user has to start scrolling to trigger the effect. 
  });
  return React.cloneElement(children, {
      elevation: trigger ? 0 : 0  //0 means flat i.e. elevation of zero. 4 means elevation of 4 to show the floating state.
  });
}

export default function Appnav(props: any) {
  const trigger = useScrollTrigger({
    disableHysteresis: true, 
    threshold: 0,
  })

  return (
    <>
        <ElevationScroll>
            <AppBar position="fixed" elevation={0} sx={{ backgroundColor: trigger ? "primary" : "transparent", boxShadow: trigger ? 3 : 0}} className='transition-all duration-500 ease-in-out'>
              <Toolbar>
                <Container className='px-9'>
                  <Grid container spacing={2} alignItems='center' className='relative'>
                    <Grid item>
                      <Link href='/'>
                        <Image src={ trigger ? '/images/logo-light.png': '/images/logo-color.png'} width={100} height={35} alt="Site's Logo"/>
                      </Link>
                    </Grid>
                    <Grid item className='absolute flex right-0'>
                      <Stack spacing={2} direction='row'>
                        <Link href='/' className={ trigger ? 'text-white' : 'primary'}>
                          <Typography variant='body1' className='hover:underline underline-offset-8'>Beranda</Typography>
                        </Link>
                        <Link href='/' className={ trigger ? 'text-white' : 'primary'}>
                          <Typography variant='body1' className='hover:underline underline-offset-8'>Tentang</Typography>
                        </Link>
                        <Link href='/' className={ trigger ? 'text-white' : 'primary'}>
                          <Typography variant='body1' className='hover:underline underline-offset-8'>Agenda</Typography>
                        </Link>
                        <Link href='/' className={ trigger ? 'text-white' : 'primary'}>
                          <Typography variant='body1' className='hover:underline underline-offset-8'>Panduan</Typography>
                        </Link>
                        <Link href='/sign-in' className={ trigger ? 'text-white' : 'primary'}>
                          <Typography variant='body1' className='hover:underline underline-offset-8'>Login</Typography>
                        </Link>
                      </Stack>
                    </Grid>
                  </Grid>
                </Container>
              </Toolbar>
            </AppBar>
        </ElevationScroll>
        <Toolbar />
    </>
  )
}
