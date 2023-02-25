import { Box, Paper } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import TitlePage from '../../components/atoms/TitlePage'
import HeaderBreadcrumbs from '../../components/molecules/HeaderBreadcrumbs'
import TableKegiatan from '../../components/molecules/TableKegiatan'
import DashboardUser from '../../components/organism/DashboardUser'
import rows from '../../json/riwayatKegiatan.json'

export default function RiwayatKegiatan() {
  return (
    <>
        <Box className='bg-grey'>
            <TitlePage title='Riwayat Kegiatan - Sinata' />
            <DashboardUser>
                <HeaderBreadcrumbs pageHeader='Riwayat Kegiatan' currentPage='Riwayat Kegiatan'>
                    <Link href='/users/riwayat-kegiatan' className='text-zinc-900 hover:underline hover:decoration-1 hover:underline-offset-2'>
                        Riwayat
                    </Link>
                </HeaderBreadcrumbs>
                <Paper className='shadow-md px-6 py-4'>
                    <TableKegiatan rows={rows} />
                </Paper>
            </DashboardUser>
        </Box>
    </>
  )
}
