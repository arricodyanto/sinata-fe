import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarPickerSkeleton, LocalizationProvider, PickersDay, StaticDatePicker } from '@mui/x-date-pickers';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import event from '../../../json/events.json'
import { Box, Divider, Modal, Typography } from '@mui/material';
import EventModalItems from '../EventModalItems';


export default function EventCalendar() {
  const initialValue = dayjs()
  const [fetchP, setFetchP] = React.useState<number[]>([])
  const requestAbortController = React.useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([1, 2, 15]);
  const [value, setValue] = React.useState<Dayjs | null>(initialValue);
  const [open, setOpen] = React.useState(false)
  
  // define type of eventdb
  const [filteredDate, setFilteredDate] = React.useState([{
    id: 0,
    title: "",
    date: "",
    sdate: 0,
    description: "",
    image: "",
    link: ""
}])

//   console.log(highlightedDays);

  function getRandomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  /**
   * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
   * ⚠️ No IE11 support
   */
  function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }, highlightDays: number[]) {
    return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
      const timeout = setTimeout(() => {
        // const daysInMonth = date.daysInMonth();
        const daysToHighlight = highlightDays
        // console.log(daysToHighlight);
  
        resolve({ daysToHighlight });
      }, 500);
  
      signal.onabort = () => {
        clearTimeout(timeout);
        reject(new DOMException('aborted', 'AbortError'));
      };
    });
  }

  const fetchHighlightedDays = (date: Dayjs, highlightDays: number[]) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    }, highlightDays)
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    fetchHighlightedDays(initialValue, fetchP);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date, fetchP);
    const getCurrentMonth = date.month()+1;
    filterEvent(getCurrentMonth)
    // console.log(currentMonth)
  };

  const handleDateChange = (newValue:any) => {
    setValue(newValue);
    filterModal(newValue);
  }

  function filterModal(newValue:any) {
    // convert date to local string (20/12/2023 15:15:20)
    const dateString = new Date(newValue).toLocaleDateString('it-IT')
    const filtered = event.filter(t=>t.date === dateString);
    // console.log(filtered)
    { 
        if (filtered.length !== 0) {
            { setOpen(true)}
            setFilteredDate(filtered)
    // console.log(event.date)
        } else {
            { setOpen(false) }
        }
    }
  }

  function filterEvent(getCurrentMonth:number) {
    // get array of object from db (json)
    const jsonValue = event.map((item) => item.date)
    // console.log(jsonValue)

    // get current month from handleMonthChange
    const currentMonth = getCurrentMonth
    // console.log(currentMonth)

    // filter array of object from db (json) by current month
    const filterMonthdb = jsonValue.filter((item) => item.split('/')[1] == currentMonth.toString())
    // const splitDate = filterMonthdb.map((item) => item.split('/')[1] == currentMonth.toString())
    
    // get only date from array of object from db (json)
    const stringDate = filterMonthdb.map((item) => item.split('/')[0])

    // convert date string to number
    const highlightDays = stringDate.map(Number)

    // console.log(highlightDays)
    // setHighlightedDays(highlightDays)
    const date = dayjs()
    fetchHighlightedDays(date, highlightDays)
    setHighlightedDays(highlightDays)
    
}

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        className='w-80 h-[23rem]'
        openTo='day'
        displayStaticWrapperAs='desktop'
        value={value}
        loading={isLoading}
        onChange={handleDateChange}
        onMonthChange={handleMonthChange}
        renderInput={(params) => <TextField {...params} />}
        componentsProps={{
            actionBar: {
                actions: ['today'],
            },
        }}
        renderLoading={() => <CalendarPickerSkeleton />}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected =
            !DayComponentProps.outsideCurrentMonth &&
            highlightedDays.indexOf(day.date()) >= 0;

          return (
            <Badge
              key={day.toString()}
              overlap="circular"
              badgeContent={isSelected ? <FiberManualRecordIcon sx={{fontSize: 12}} color='primary' />  : undefined}
            >
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
      
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
  );
}