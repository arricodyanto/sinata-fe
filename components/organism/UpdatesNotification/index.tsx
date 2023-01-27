import React from 'react'
import { Box, IconButton, Modal, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import UpdateItems from '../../molecules/UpdateItems';

export default function UpdatesNotification() {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
  return (
    <>
        <Modal open={open} onClose={handleClose} aria-labelledby="updates-modal-title" aria-describedby="updates-modal-description">
            <Box className='absolute bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xs:w-[360px] sm:w-[700px] h-[500px] outline-0 rounded-md overflow-hidden hover:overflow-y-auto'>
                <Stack id='updates-modal-title' direction="row" spacing={2} className='relative py-2 px-4 bg-gray-100 rounded-t-md'>
                    <Typography variant="subtitle1" className='font-bold text-gray-600'>
                        Updates Log!
                    </Typography>
                    <IconButton onClick={handleClose} aria-label='Close' className='absolute right-3 -translate-y-1'>
                        <CloseIcon fontSize='small'/>
                    </IconButton>
                </Stack>
                <Box id='updates-modal-description' className='p-6'>
                    <UpdateItems />
                </Box>
            </Box>
        </Modal>
    </>
  )
}
