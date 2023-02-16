import { Box, Paper, Stack } from '@mui/material'
import React from 'react'
import BasicLineChart from '../../atoms/BasicLineChart'

type TFlowCardProps = {
    color?: string
    icon?: React.ReactNode 
    text?: string
}

export default function FlowCard(props: TFlowCardProps) {
    const { color, icon, text } = props
    const data = [
        { x: 'Jan', y: 40 },
        { x: 'Feb', y: 30 },
        { x: 'Mar', y: 45 },
        { x: 'Apr', y: 50 },
        { x: 'May', y: 35 },
        { x: 'Jun', y: 55 },
      ];
  return (
    <>
        <Paper className='p-6 h-40 shadow-md rounded-xl' sx={{ bgcolor: `${color}`, color: `${text}`}}>
            <Stack spacing={1} direction='row'>
                <Box className='w-full'>
                    {icon}
                </Box>
                <Box className='-translate-y-10 w-1/2'>
                    <BasicLineChart data={data} />
                </Box>
            </Stack>
        </Paper>
    </>
  )
}
