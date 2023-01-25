import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import EventCard from "../../molecules/EventCard";
import event from "../../../json/events.json";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

export default function AllEvents() {
  return (
    <>
      <Grid container spacing={3}>
        {event.map((item) => {
          return (
            <Grid
              key={item.id}
              item
              xs={12}
              sm={4}
              className="justify-center flex"
            >
              <Card
                sx={{ width: 330 }}
                variant="outlined"
                className="rounded-xl shadow-lg border"
              >
                <CardHeader
                  className="text-center py-3 h-7"
                  title={
                    <Typography
                      variant="caption"
                      color="text.primary"
                      className="truncate"
                    >
                      <CalendarMonthOutlinedIcon sx={{ fontSize: 10 }} />{" "}
                      {item.date}
                      <ScheduleOutlinedIcon
                        sx={{ fontSize: 10, marginLeft: 1 }}
                      />{" "}
                      {item.date}
                    </Typography>
                  }
                />
                <CardMedia
                  component="img"
                  image={item.image}
                  alt="Event Image"
                />
                <CardContent sx={{ height: 120 }}>
                  <Typography
                    variant="body1"
                    color="text.primary"
                    className="mb-1 truncate"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="leading-[1rem] line-clamp-3"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions className="justify-center h-7">
                  <Link href="/">
                    <IconButton aria-label="more" color="primary">
                      <VisibilityIcon fontSize="small" />
                      <Typography variant="caption" className="pl-1">
                        More
                      </Typography>
                    </IconButton>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
