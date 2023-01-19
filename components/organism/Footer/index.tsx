import React from 'react'
import { Box, Button, Container, Divider, Grid, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box className=' bg-gray-800 text-white mt-12'>
        <Container className='py-12'>
            <Grid container className=''>
                <Grid item xs={12} sm={6}>
                    <Stack direction='row'>
                        <Typography variant='h5' className='font-bold'>SINATA</Typography>
                        <Typography variant='body2' className='align-bottom'>&copy;</Typography>
                    </Stack>
                    <Typography variant='subtitle1' className='mt-10 italic'>&quot;Every civitas can publish theirs here!&quot;</Typography>
                    <Typography variant='caption' className='mt-0'>~ Public Relation UNS</Typography>
                    <Divider />
                    <Link href='/sign-in'>
                        <Button variant='contained' sx={{borderRadius: 0}} size='large' className='mt-3 w-1/2 h-[55px] capitalize' endIcon={<ArrowForwardIcon fontSize='small' />}>Ajukan Layanan</Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}
