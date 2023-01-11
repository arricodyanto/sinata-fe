import { InputAdornment, TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material'
import React from 'react'

type TTextfieldProps = {
    icon?: React.ReactNode
}

export default function TextfieldIcon(props: TTextfieldProps & Partial<TextFieldProps>) {
    const { 
        icon,
        ...textfieldProps
    } = props
  return (
    <TextField className='mb-8' fullWidth {...textfieldProps} InputProps={{ startAdornment: (
        <InputAdornment position='start'>{icon}</InputAdornment>
    )}} variant='outlined' size='small' inputProps={{style: {fontSize: 14}}}/>
  )
}
