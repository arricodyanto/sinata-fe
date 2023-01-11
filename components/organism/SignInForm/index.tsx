import { Box, Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import TextfieldIcon from '../../atoms/TextfieldIcon'
import TextfieldPass from '../../atoms/TextfieldPass'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

export default function SignInForm () {
  return (
    <>
      <form action="/" method="post">
        <Box className='mt-9'>
            <TextfieldIcon id='email' label='Email Address' icon={<EmailIcon />} placeholder='hello@yourmail.com'/>
            <TextfieldPass icon={<KeyIcon />} />
            <Grid container>
                <Grid item xs={7}>
                    <FormControlLabel className='pl-1' control={<Checkbox size='small'/>} label={<Typography variant='body2'>Remember me</Typography>}/>
                </Grid>
                <Grid item xs={5}>
                    <Link href='/'>
                        <Typography sx={{textAlign: 'right'}} className='pt-[11px] text-gray-400 text-xs' variant='body2'>Forgot password?</Typography>
                    </Link>
                </Grid>
            </Grid>
            <Button variant='contained' fullWidth color='primary' className='bg-[#00afef] text-white mt-4'>Sign in</Button>
        </Box>
      </form>
    </>
  )
}
