import React from 'react'
import dayjs, {Dayjs} from 'dayjs'
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Alert, Box, Button, CardContent, Divider, Modal, TextField, Typography } from '@mui/material';
import 'react-calendar/dist/Calendar.css';
import event from '../../../json/events.json'
import EventModalItems from '../EventModalItems';



export default function EventCalendar() {
    const [date, setDate] = React.useState<Dayjs | null>(dayjs())
    const [open, setOpen] = React.useState(false)
    const [filteredDate, setFilteredDate] = React.useState([{
        id: 0,
        title: "",
        date: "",
        description: "",
        image: "",
        link: ""
    }])
    
    function handleDate(newValue:any) {
        setDate(newValue);
        filterDate(newValue)
    }

    function filterDate(newValue:any) {
        const dateString = new Date(newValue).toLocaleDateString()
        const filtered = event.filter(t=>t.date === dateString);
        // console.log(filtered)
        {if (filtered.length !== 0) {
            {setOpen(true)}
            setFilteredDate(filtered)
        
        // console.log(event.date)
       } else {
        {setOpen(false)}
       }
     }
    }

  return (
    <>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
         <StaticDatePicker
            // orientation='landscape'
            displayStaticWrapperAs='desktop'
            openTo='day'
            value={date}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
        />
        <Modal 
            open={open} 
            onClose={() => setOpen(false)} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{ maxWidth: {xs: 360, sm: 512}, maxHeight: 530}} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border p-4 rounded-lg overflow-y-auto'>
                <>
                {
                    // console.log(filteredDate)
                    // event.map(({id, title, date, description, image}) => {
                    //     return (
                    //         <Typography key={id}>{id} - {title} - {date} - {description} - {image} </Typography>
                    //     )
                    // })
                }
                </>
                
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
        {/* <Calendar onChange={setDateku} value={dateku} onClickDay={(value) => halo(value)}/> */}
        {/* { handleDate === "1/14/2023" ? <Alert>hello</Alert> : <Alert>noo</Alert>} */}


    </>
  )
}
