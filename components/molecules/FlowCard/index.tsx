import { Box, Paper, Stack } from '@mui/material'
import React from 'react'
import BasicLineChart from '../../atoms/BasicLineChart'

type TFlowCardProps = {
    color?: string
    icon?: React.ReactNode 
    text?: string
    lineColor: string
    data: { x: string; y: number }[]
}

export default function FlowCard(props: TFlowCardProps) {
    const { color, icon, text, lineColor, data } = props
  return (
    <>
        <Paper className='p-6 h-40 shadow-md rounded-xl' sx={{ bgcolor: `${color}`, color: `${text}`}}>
            <Stack spacing={1} direction='row'>
                <Box className='w-full'>
                    {icon}
                </Box>
                <Box className='-translate-y-10 w-1/2'>
                    <BasicLineChart lineColor={lineColor} data={data} />
                </Box>
            </Stack>
        </Paper>
    </>
  )
}
