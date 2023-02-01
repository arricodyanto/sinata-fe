import React from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import AppnavMenu from '../AppnavMenu';
import ContainerPage from '../../atoms/ContainerPage';
import MenuIcon from '@mui/icons-material/Menu';

function ElevationScroll(props: any) {
    const { children } = props
  
    const trigger = useScrollTrigger({
      disableHysteresis: true, 
      threshold: 100, 
    });
    return React.cloneElement(children, {
        elevation: trigger ? 0 : 0  
    });
  }

type Anchor = 'left';

export default function DashboardAppnav(props: any) {
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
            <AppBar elevation={1} sx={{ boxShadow: trigger ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : '' }} className='bg-white transition-all duration-500 ease-in-out'>
                <Toolbar sx={{height: {xs: 70, sm: 80, lg: 70}}} className='shadow-sm text-gray-600 flex'>
                    <ContainerPage disableGutters>
                        <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={0}>
                            <Stack>
                                <IconButton className='hover:text-primary' aria-label='sidebar'><MenuIcon fontSize='small'/></IconButton>
                            </Stack>
                            <Stack direction='row' alignItems='center' spacing={0}>
                                <AppnavMenu />
                            </Stack>
                        </Stack>
                    </ContainerPage>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    </>
  )
}
