import React from 'react'
import { Box, Button, Container, Grid, IconButton, Toolbar, Typography, Stack, Divider, List } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import AppnavMenu from '../AppnavMenu';
import ContainerPage from '../../atoms/ContainerPage';
import MenuIcon from '@mui/icons-material/Menu';
import CssBaseline from '@mui/material/CssBaseline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';

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

// type Anchor = 'left';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  // zIndex: theme.zIndex.drawer + 1,
  // zIndex: theme.zIndex.drawer,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function DashboardAppnav(props: any) {
    const trigger = useScrollTrigger({
        disableHysteresis: true, 
        threshold: 0,
    })
    // const [drawer, setDrawer] = React.useState({ left: false });
    // const toggleDrawer =
    // (anchor: Anchor, open: boolean) =>
    // (event: React.KeyboardEvent | React.MouseEvent) => {
    //     if (
    //     event.type === 'keydown' &&
    //     ((event as React.KeyboardEvent).key === 'Tab' ||
    //         (event as React.KeyboardEvent).key === 'Shift')
    //     ) {
    //     return;
    //     }
    //     setDrawer({ ...drawer, [anchor]: open });
    // };

    // const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

  return (
    <>
        {/* <ElevationScroll>
            <AppBar elevation={1} sx={{ boxShadow: trigger ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : '' }} className='bg-white transition-all duration-500 ease-in-out'>
                <Toolbar sx={{height: {xs: 70, md: 80, lg: 70}}} className='shadow-sm text-gray-600 flex'>
                        <Stack direction='row' justifyContent='space-between' alignItems='center' className='w-full'>
                            <Stack>
                                <IconButton onClick={toggleDrawer('left', true)} className='hover:text-primary' aria-label='sidebar'><MenuIcon fontSize='small'/></IconButton>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <AppnavMenu />
                            </Stack>
                        </Stack>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <Drawer anchor='left' open={drawer['left']} onClose={toggleDrawer('left', false)}>
            <Box sx={{ width: 250 }} 
            // onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)}
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis officiis quasi pariatur quae dolorum ipsam, numquam quaerat aut illum tenetur eligendi architecto rerum atque iste eius dicta accusamus laborum iure sequi! Voluptates esse obcaecati nihil natus voluptatibus quibusdam ab molestias facilis sint quod non voluptate repudiandae ipsam tenetur veniam fugiat consectetur suscipit, maiores vel. Culpa inventore quibusdam libero dolorem exercitationem fugit facere voluptatum quis suscipit nam maxime ab pariatur sed a, accusamus dignissimos repellendus eius illo eos? Impedit quae molestiae maiores, incidunt dolore dolor debitis? Reprehenderit consequatur perferendis labore earum modi alias vitae nulla odit consectetur accusamus ad, rerum temporibus?
            </Box>
        </Drawer> */}
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar position="fixed" open={open} sx={{ 
          boxShadow: trigger ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' : '',
          }} className='bg-white'>
          <Toolbar>
            <Stack direction='row' justifyContent='space-between' alignItems='center' className='w-full'>
              <Stack className='transition-all duration-2000 ease-in-out'>
                  {/* <IconButton onClick={toggleDrawer('left', true)} className='hover:text-primary' aria-label='sidebar'><MenuIcon fontSize='small'/></IconButton> */}
                <IconButton aria-label="open drawer" className={!open? 'translate-x-16 transition-all duration-200 ease-in-out rotate-90 text-primary' : 'hover:text-primary'} onClick={!open? handleDrawerOpen : handleDrawerClose} edge="start">
                  <MenuIcon />
                </IconButton>
              </Stack>
              <Stack direction='row' alignItems='center'>
                  <AppnavMenu />
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Drawer variant="permanent" open={open} PaperProps={{ sx: { backgroundColor: '#323742', color: '#9ca3af' }}}>
        <DrawerHeader>
            {!open? <Image src='/images/logo-sm.png' width={30} height={30} alt='logo' className=''/> : <Image src='/images/logo-color.png' width={90} height={30} alt='logo' className=''/>}
        </DrawerHeader>
        <Divider className='border-gray-700' />
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }}>
                  {index % 2 === 0 ? <InboxIcon className='text-gray-400' fontSize='small'/> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
    </>
  )
}
