import React from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { Stack } from '@mui/system';
import DrawerItems from '../../molecules/DrawerItems';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

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
            <AppBar elevation={1} sx={{ boxShadow: trigger ? 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : 0 }} className='bg-transparent transition-all duration-500 ease-in-out'>
                <Toolbar sx={{height: {xs: 70, sm: 80, lg: 70}}} className='bg-white shadow-sm text-gray-600'>
                    <Stack sx={{ width: {xs: 380, sm: 760, lg: 1280} }} className='flex'>
                        <Stack direction='row' justifyContent='flex-end' spacing={2}>
                            <DrawerItems alt='notif-icon' icon={<NotificationsNoneIcon className='focus:ring-1' />}>
                                Hello
                            </DrawerItems>
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    </>
  )
}
