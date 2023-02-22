import React from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';

type TTimePickerBasicProps = {
  label?: string
  defaultValue: string
}

export default function TimePickerBasic(props: TTimePickerBasicProps) {
    const { label, defaultValue } = props
    console.log(defaultValue)
    const [value, setValue] = React.useState<Dayjs | null>(
      dayjs(defaultValue, 'DD/MM/YYYY HH:mm:00'),
    )
    
    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue);
    }
  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker label={label} inputFormat='HH:mm' value={value} onChange={handleChange} renderInput={(params) => <TextField className='mb-6' fullWidth variant='outlined' size='small' inputProps={{style: {fontSize: 14}}} sx={{'& .MuiOutlinedInput-root': { '&:hover fieldset': { borderColor: '#0ea5e9',}}}} {...params} />} />
        </LocalizationProvider>
    </>
  )
}
