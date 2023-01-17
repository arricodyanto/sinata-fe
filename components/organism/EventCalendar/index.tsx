import React from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider, PickersDay, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Alert, Badge, Box, Button, CardContent, Divider, Modal, TextField, Typography } from '@mui/material';
import event from '../../../json/events.json'
import EventModalItems from '../EventModalItems';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function EventCalendar() {
    const [date, setDate] = React.useState<Dayjs | null>(dayjs())
    const [open, setOpen] = React.useState(false)
    const [monthEvent, setMonthEvent] = React.useState<number[]>([])
    // console.log(monthEvent)
    const eventDate = event.map((item:any) => {
        return item.sdate
    })
    // console.log(eventDate)
    const [filteredDate, setFilteredDate] = React.useState([{
        id: 0,
        title: "",
        date: "",
        sdate: 0,
        description: "",
        image: "",
        link: ""
    }])
    
    function handleDate(newValue:any) {
        setDate(newValue);
        filterDate(newValue)
    }

    function filterDate(newValue:any) {
        // convert date to local string (20/12/2023 15:15:20)
        const dateString = new Date(newValue).toLocaleDateString('it-IT')
        // const dateString = new Date(newValue).toDateString()
        // split localed date with / to array
        const dateString2 = dateString.split('/')
        // checkMonth(dateString2)
        // console.log(dateString2)
        // check the value if include in json
        const filtered = event.filter(t=>t.date === dateString);
        {if (filtered.length !== 0) {
            {setOpen(true)}
            setFilteredDate(filtered)
        // console.log(event.date)
       } else {
        {setOpen(false)}
       }
     }
    }

    const jsonValue = event.map((item) => item.date)
    const currentBulan = dayjs().get('month')+1
    const filtJson = jsonValue.filter((item) => item.split('/')[1] == currentBulan.toString())
    const stringDate = filtJson.map((item) => item.split('/')[0])
    const dateValue = stringDate.map(Number)
    const [highlightedDays, setHighlightedDays] = React.useState(dateValue);


    // function checkMonth(dateString2:any) {
    //     // event.map((item) => {
    //     //     // console.log(item.sdate)
    //     // })
    //     // const arrJson = jsonValue.toString()
    //     // const splitJsonDate = arrJson.split('/')
    //     // console.log(filtJson)
    //     // jsonVal = filtJson
    // }

  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
         <StaticDatePicker
            // orientation='landscape'
            className='w-80 h-[21rem]'
            displayStaticWrapperAs='desktop'
            openTo='day'
            value={date}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
            componentsProps={{
                actionBar: {
                    actions: ['today'],
                },
            }}
            renderDay={(day, _value, DayComponentProps) => {
                const isSelected =
                  !DayComponentProps.outsideCurrentMonth &&
                  highlightedDays.indexOf(day.date()) >= 0
                // console.log('highlitedDays: ', isSelected)
                return (
                  <Badge
                    key={day.toString()}
                    overlap="circular"
                    badgeContent={isSelected ? <FiberManualRecordIcon sx={{fontSize: 12}} color='primary' /> : undefined}
                  >
                    <PickersDay {...DayComponentProps} />
                  </Badge>
                );
              }}
        />
        <>
            {/* {console.log(jsonVal)} */}
        </>
        <Modal open={open} onClose={() => setOpen(false)} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={{ maxWidth: {xs: 360, sm: 512}, maxHeight: 530}} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border p-4 rounded-lg overflow-y-auto'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    List Agenda
                </Typography>
                <Divider className='mt-3'/>
                <Typography id="modal-modal-description">
                    <EventModalItems filteredDate={filteredDate} />
                </Typography>
            </Box>
        </Modal>
        </LocalizationProvider>
    </>
  )
}
