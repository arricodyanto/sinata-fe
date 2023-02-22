import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';

type TDatePickerBasicProps = {
  label?: string
    defaultValue: string
}

export default function DatePickerBasic(props: TDatePickerBasicProps) {
    const { label, defaultValue } = props
    const [value, setValue] = React.useState<Dayjs | null>(
      dayjs(defaultValue, 'DD/MM/YYYY'),
    )
    
    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
    }
  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label={label} inputFormat='DD/MM/YYYY' value={value} onChange={handleChange} renderInput={(params) => <TextField className='mb-6' fullWidth variant='outlined' size='small' inputProps={{style: {fontSize: 14}}} sx={{'& .MuiOutlinedInput-root': { '&:hover fieldset': { borderColor: '#0ea5e9',}}}} {...params} />} />
        </LocalizationProvider>
    </>
  )
}
