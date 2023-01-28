import React from 'react'
import { Alert, AlertTitle, Box, Collapse, IconButton, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

export default function AlertUpdates() {
    const [open, setOpen] = React.useState(true);
  return (
    <>
        <Box className='-mt-3 mb-6 -mx-3'>
            <Collapse in={open}>
                <Alert severity='info' action={
                    <IconButton aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false) }}>
                        <CloseIcon fontSize='inherit' />
                    </IconButton>
                }>
                    <AlertTitle className='text-sm mb-0'> Keterangan penomoran versi: v(x).(y).(z)</AlertTitle>
                    <Typography variant='caption' className='text-gray-500'>
                        <li>x = perubahan keseluruhan dari sistem</li>
                        <li>y = perbaikan/penambahan halaman</li>
                        <li>x = perubahan/penambahan section dari halaman</li>
                    </Typography>
                </Alert>
            </Collapse>
        </Box>
    </>
  )
}
