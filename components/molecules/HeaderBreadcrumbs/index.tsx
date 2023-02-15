import { Box, Breadcrumbs, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

type THeaderBreadcrumbsProps = {
    pageHeader: string
    currentPage: string
    children?: React.ReactNode
}

export default function HeaderBreadcrumbs(props: THeaderBreadcrumbsProps) {
    const { pageHeader, currentPage, children } = props
  return (
    <>
        <Grid container spacing={1} marginBottom={3}>
            <Grid item xs={12} md={6}>
                <Typography variant='h6' component='h1'>{pageHeader}</Typography>
            </Grid>
            <Grid item xs={12} md={6} className='flex justify-end'>
                <Breadcrumbs aria-label='breadcrumb' sx={{ color: 'text.secondary'}}>
                    <Box className='text-zinc-900'>
                        <Link href='/'>
                            Sinata
                        </Link>
                        {children}
                    </Box>
                    <Typography color='text.secondary'>{currentPage}</Typography>
                </Breadcrumbs>
            </Grid>
        </Grid>
     </>
  )
}
