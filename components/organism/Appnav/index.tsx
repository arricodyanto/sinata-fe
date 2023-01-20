import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Box, Button, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

function ElevationScroll(props: any) {
  const { children } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true, //Whether or not there is a little delay when the user is scrolling.
    threshold: 100, //0 means trigger the event listener as soon as the user starts scrolling.
      //Default to 100 which means scrolling further down before the even listener triggers. It controls how far the user has to start scrolling to trigger the effect. 
  });
  return React.cloneElement(children, {
      elevation: trigger ? 0 : 0  //0 means flat i.e. elevation of zero. 4 means elevation of 4 to show the floating state.
  });
}

type Anchor = 'left';

export default function Appnav(props: any) {
  const trigger = useScrollTrigger({
    disableHysteresis: true, 
    threshold: 0,
  })
  const [drawer, setDrawer] = React.useState({ left: false });
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawer({ ...drawer, [anchor]: open });
    };

  return (
    <>
        <ElevationScroll>
            <AppBar elevation={0} sx={{ backgroundColor: trigger ? "primary" : "transparent", boxShadow: trigger ? 3 : 0}} className='transition-all duration-500 ease-in-out'>
              <Toolbar sx={{height: {xs: 70, sm: 80, lg: 70}}}>
                <Container>
                  <Grid container spacing={1} alignItems='center' className='relative'>
                    <Grid item xs={2} sx={{ display: {xs: 'flex', sm: 'none' }}}>
                      {(['left'] as const).map((anchor) => (
                        <React.Fragment key={anchor}>
                          <Button variant='outlined' onClick={toggleDrawer(anchor, true)} sx={{ color: trigger? 'white' : 'primary', borderColor: 'secondary'}}><MenuIcon/></Button>
                          <Drawer anchor={anchor} open={drawer[anchor]} onClose={toggleDrawer(anchor, false)} PaperProps={{ sx: {backgroundColor: '#323742'}}}>
                            <Box className='pt-4 text-light' sx={{ width: 240 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
                              <Typography variant='h6' className='' sx={{display:'flex', justifyContent:'center', alignItems:'center', fontSize: 18}}>SINATA</Typography>
                              <Divider className='pt-5 border-gray-600' />
                              <List>
                                <ListItem>
                                  <ListItemButton>
                                    <ListItemIcon>
                                      <HomeOutlinedIcon sx={{ color: '#f3f4f6'}}/>
                                    </ListItemIcon>
                                    <Link href='/'> 
                                      <Typography variant='body1'>Beranda</Typography>
                                    </Link>
                                  </ListItemButton>
                                </ListItem>
                                <ListItem>
                                  <ListItemButton>
                                    <ListItemIcon>
                                      <InfoOutlinedIcon sx={{color: '#f3f4f6'}} />
                                    </ListItemIcon>
                                    <Link href='/about'>
                                      <Typography variant='body1'>Tentang</Typography>
                                    </Link>
                                  </ListItemButton>
                                </ListItem>
                                <ListItem>
                                  <ListItemButton>
                                    <ListItemIcon>
                                      <EventOutlinedIcon sx={{color: '#f3f4f6'}} />
                                    </ListItemIcon>
                                    <Link href='/'>
                                      <Typography variant='body1'>Agenda</Typography>
                                    </Link>
                                  </ListItemButton>
                                </ListItem>
                                <ListItem>
                                  <ListItemButton>
                                    <ListItemIcon>
                                      <NoteAltOutlinedIcon sx={{color: '#f3f4f6'}} />
                                    </ListItemIcon>
                                    <Link href='/'>
                                      <Typography variant='body1'>Panduan</Typography>
                                    </Link>
                                  </ListItemButton>
                                </ListItem>
                                <ListItem>
                                  <ListItemButton>
                                    <ListItemIcon>
                                      <LoginOutlinedIcon sx={{color: '#f3f4f6'}} />
                                    </ListItemIcon>
                                    <Link href='/sign-in'>
                                      <Typography variant='body1'>Sign in</Typography>
                                    </Link>
                                  </ListItemButton>
                                </ListItem>
                              </List>
                          </Box>
                          </Drawer>
                        </React.Fragment>
                      ))}
                    </Grid>
                    <Grid item xs={8} sx={{ display: {xs: 'flex', sm: 'none' }}} className='justify-center'>
                      <Link href='/'>
                        <Image src={ trigger ? '/images/logo-light.png': '/images/logo-color.png'} width={100} height={35} alt="Site's Logo"/>
                      </Link>
                    </Grid>
                    <Grid item sx={{ display: {xs: 'none', sm: 'flex' }}}>
                      <Link href='/'>
                        <Image src={ trigger ? '/images/logo-light.png': '/images/logo-color.png'} width={100} height={35} alt="Site's Logo"/>
                      </Link>
                    </Grid>
                    <Grid item className='absolute flex right-0'>
                      <Stack spacing={2} direction='row' sx={{ display: {xs: 'none', sm: 'flex' }}}>
                        <Link href='/' className='text-light'>
                          <Typography variant='body1' className='hover:brightness-90 hover:text-underline underline-offset-8'>Beranda</Typography>
                        </Link>
                        <Link href='/about' className='text-light'>
                          <Typography variant='body1' className='hover:brightness-90 hover:text-underline underline-offset-8'>Tentang</Typography>
                        </Link>
                        <Link href='/' className='text-light'>
                          <Typography variant='body1' className='hover:brightness-90 hover:text-underline underline-offset-8'>Agenda</Typography>
                        </Link>
                        <Link href='/' className='text-light'>
                          <Typography variant='body1' className='hover:brightness-90 hover:text-underline underline-offset-8'>Panduan</Typography>
                        </Link>
                        <Link href='/sign-in' className='text-light'>
                          <Typography variant='body1' className='hover:brightness-90 hover:text-underline underline-offset-8'>Sign in</Typography>
                        </Link>
                      </Stack>
                    </Grid>
                  </Grid>
                </Container>
              </Toolbar>
            </AppBar>
        </ElevationScroll>
        <Toolbar />
    </>
  )
}
