import React from 'react'
import { TextField, InputAdornment } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function TextfieldSearch() {
  return (
    <>
        <TextField className='-translate-x-1' id='search' label='Cari' variant='outlined' fullWidth placeholder='Masukkan kata kunci' size='small' InputProps={{
            style: {fontSize: 14}, startAdornment: (<InputAdornment position='start'><SearchOutlinedIcon /></InputAdornment>)
        }} />
    </>
  )
}
