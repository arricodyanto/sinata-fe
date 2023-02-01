import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ContainerPage from "../components/atoms/ContainerPage";
import PageTitle from "../components/atoms/PageTitle";
import HeaderPages from "../components/molecules/HeaderPages";
import AllEvents from "../components/organism/AllEvents";
import EventCalendar from "../components/organism/EventCalendar";
import Footer from "../components/organism/Footer";
import TodaysEvent from "../components/organism/TodaysEvent";
import TomorrowsEvent from "../components/organism/TomorrowsEvent";

export default function Events() {
  return (
    <Box className="bg-white">
      <HeaderPages
        titlePage="Agenda - Sistem Informasi Manajemen Pelayanan dan Berita"
        srcImg="/images/bg-events.jpg"
      />
      <ContainerPage>
        <PageTitle title="Agenda" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} className="justify-center flex">
            <EventCalendar />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className="font-bold mb-4" color="primary">
              Agenda Hari Ini
            </Typography>
            <TodaysEvent />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" className="font-bold mb-4" color="primary">
              Agenda Selanjutnya
            </Typography>
            <TomorrowsEvent />
          </Grid>
        </Grid>
        <Box className="mt-10">
          <Typography variant="h5" className="font-bold mb-4" color="primary">
            Semua Agenda
          </Typography>
          <AllEvents />
        </Box>
      </ContainerPage>
      <Footer />
    </Box>
  );
}
