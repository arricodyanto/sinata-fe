import { Divider, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function FooterDashboard() {
    var year = new Date().getFullYear()
  return (
    <>
    <Stack className='w-full'>
        <Divider light />
        <Stack direction="row" justifyContent="space-between" alignItems="center" className='py-3 px-6'>
            <Stack direction="row" alignItems="center">
                <Typography variant="body2" className='text-gray-600'>
                    {year} &copy; SINATA - Developed with <span className='text-primary'>hearts</span> by <Link href='https://github.com/arricodyanto' className='hover:text-primary'>Arrico Handyanto</Link>
                </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Link href='/'>
                    <Typography variant="body2" className='text-gray-600 hover:text-primary hover:font-medium'>Beranda</Typography>
                </Link>
                <Link href='/about'>
                    <Typography variant="body2" className='text-gray-600 hover:text-primary hover:font-medium'>Tentang</Typography>
                </Link>
                <Link href='/guidelines'>
                    <Typography variant="body2" className='text-gray-600 hover:text-primary hover:font-medium'>Panduan</Typography>
                </Link>
                <Link href='/about#kontak'>
                    <Typography variant="body2" className='text-gray-600 hover:text-primary hover:font-medium'>Kontak</Typography>
                </Link>
            </Stack>
        </Stack>
    </Stack>
    </>
  )
}
