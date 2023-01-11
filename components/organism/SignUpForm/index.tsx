import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import TextfieldIcon from '../../atoms/TextfieldIcon'
import TextfieldPass from '../../atoms/TextfieldPass'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function SignUpForm() {
    const [checked, setChecked] = React.useState(false)
    const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked)
    }
  return (
    <>
      <form action="/" method="post">
        <Box className='mt-9'>
            <TextfieldIcon id='username' label='Nama Pengguna' icon={<AlternateEmailIcon />} placeholder='johndoe'/>
            <TextfieldIcon id='name' label='Nama Lengkap' icon={<AccountCircleIcon />} placeholder='John Doe'/>
            <TextfieldIcon id='email' label='Alamat Email' icon={<EmailIcon />} placeholder='johndoe@yourmail.com'/>
            <TextfieldPass icon={<KeyIcon />}/>
            <FormControlLabel className='pl-1' sx={{alignItems: 'flex-start'}} control={<Checkbox size='small' sx={{ marginTop: -1 }} checked={checked} onChange={handleChecked}/>} label={<Typography variant='caption' className='text-gray-500'>
              dengan mencentang kolom ini, berarti anda setuju dengan syarat dan aturan yang berlaku
            </Typography>}/>
            <Button variant='contained' disabled={!checked} fullWidth color='primary' className='mt-4 mb-1'>Register</Button>
        </Box>
      </form>
    </>
  )
}
