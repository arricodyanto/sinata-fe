import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import event from "../../../json/events.json";
import Link from "next/link";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import PlaceIcon from '@mui/icons-material/Place';

export default function AllEvents() {
  return (
    <>
      <Grid container spacing={3}>
        {event.map((item) => {
          return (
            <Grid key={item.id} item xs={12} md={4} className="justify-center flex" >
              <Card sx={{ maxWidth: 400 }} variant="elevation" className="rounded-xl shadow-lg border relative" >
                <Box className="relative">
                  <CardMedia component="img" image={item.image} alt="Event Image" />
                  <Box className="bg-white py-0 px-1 absolute top-0 left-0 m-3 rounded-lg">
                    <Typography variant="caption" className="text-gray-600">
                      {item.sifat}
                    </Typography>
                  </Box>
                  <Box className="bg-white py-1 px-3 absolute bottom-0 right-0 m-3 rounded-md flex">
                    <Avatar alt={item.publisher} src={item.avatar} sx={{ width: 20, height: 20 }} className='mr-1'/>
                    <Typography variant="body2" className="text-gray-500">
                      {item.publisher}
                    </Typography>
                  </Box>
                </Box>
                <CardContent className="max-h-40 pb-0">
                  <Typography variant="body1" color="text.primary" className="mb-1 truncate" >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="leading-[1rem] line-clamp-3" >
                    {item.description}
                  </Typography>
                  <Divider className="mt-4 mb-2"/>
                  <Grid container spacing={1}>
                    <Grid item xs={4} className="flex justify-center">
                      <Typography variant="caption" className="truncate text-gray-500">
                        <CalendarMonthOutlinedIcon sx={{ fontSize: 11 }} color='primary' className="mr-1" />{item.date}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className="flex justify-center">
                      <Typography variant="caption" className="truncate text-gray-500">
                        <ScheduleOutlinedIcon sx={{ fontSize: 11 }} color='primary' className="mr-1" />{item.time}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} className="flex justify-center">
                      <Typography variant="caption" className="truncate text-gray-500">
                        <PlaceIcon sx={{ fontSize: 12 }} color='primary' className="mr-1" />{item.location}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions className="px-3">
                  <Link href="/events">
                    <Button variant="text" color="primary" size="small">
                      Lihat Detail
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </>
  );
}
