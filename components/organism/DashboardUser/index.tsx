import React from 'react'
import { Box, Button, Container, Grid, IconButton, Toolbar, Typography, Stack, Divider, List, ListSubheader, Collapse } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { styled, Theme, CSSObject } from '@mui/material/styles';
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
import Link from 'next/link';
import FooterDashboard from '../FooterDashboard';
import DrawerMobile from '../DrawerMobile';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

type  TDashboardUserProps = {
    children: React.ReactNode;
}

function ElevationScroll(props: any) {
    const { children } = props
  
    const trigger = useScrollTrigger({
      disableHysteresis: true, 
      threshold: 100, 
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0  
    });
  }

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
  width: `calc(${theme.spacing(0)} + 1px)`,
  [theme.breakpoints.up('md')]: {
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

export default function DashboardUser(props: any) {
  const { children } = props

  // Elevate Scroll Trigger
  const trigger = useScrollTrigger({
      disableHysteresis: true, 
      threshold: 0,
  })

  // Desktop Drawer
  const [windowWidth, setWindowWidth] = React.useState(760)
  React.useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize);
    if(windowWidth < 760) {
        setOpen(false)
    } else {
        setOpen(true)
    }
    // handleResize();
  }, [windowWidth])
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
      setOpen(true);
  }

  const handleDrawerClose = () => {
      setOpen(false);
  }
  
  // Menu List
  const [openMenu, setOpenMenu] = React.useState(false)
  const handleClick = () => {
    setOpenMenu(!openMenu)
  }
  const listMenu = (
    <>
      <List>
        <ListItem disablePadding sx={{ display: 'block' }} className='text-[#9ca3af] hover:brightness-[1.6] transition-all ease-in-out'>
          <Link href='/users/dashboard'>
            <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} className='xs:pl-7 md:pl-5'>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : {xs: 2, md: 'auto'}, justifyContent: 'center', }}>
                <HomeOutlinedIcon sx={{ color: '#9ca3af'}} className='' fontSize='small' />
              </ListItemIcon>
              <Typography variant='body1' className='text-gray-400 w-full' sx={{ opacity: open ? {xs: 0, md: 1} : {xs: 1, md: 0} }}>Dashboard</Typography>
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider light className='border-gray-600 mx-5' />
      <List subheader={
        <Typography variant='overline' className='font-bold text-[#9ca3af] px-5 py-2'>Layanan</Typography>
      }>
        <ListItem disablePadding sx={{ display: 'block' }} className='text-[#9ca3af] transition-all ease-in-out'>
          <Link href='#'>
            <ListItemButton onClick={handleClick} sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5, }} className='xs:pl-7 md:pl-5 hover:brightness-[1.6]'>
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : {xs: 2, md: 'auto'}, justifyContent: 'center', }}>
                <HomeOutlinedIcon sx={{ color: '#9ca3af'}} className='' fontSize='small' />
              </ListItemIcon>
              <Typography variant='body1' className='text-gray-400 w-full' sx={{ opacity: open ? {xs: 0, md: 1} : {xs: 1, md: 0} }}>Riwayat</Typography>
              {openMenu ? <ExpandLess sx={{ color: '#9ca3af'}} fontSize='small' /> : <ExpandMore sx={{ color: '#9ca3af'}} fontSize='small' />}
            </ListItemButton>
            <Collapse in={openMenu} timeout={500} unmountOnExit>
              <List disablePadding>
                <Link href='/users/dashboard'>
                  <ListItemButton className='hover:brightness-[1.6]'>
                    <Typography variant='body1' className='text-gray-400 xs:pl-12 md:pl-10'>Riwayat Kegiatan</Typography>
                  </ListItemButton>
                </Link>
                <Link href='/users/dashboard'>
                  <ListItemButton className='hover:brightness-[1.6]'>
                    <Typography variant='body1' className='text-gray-400 xs:pl-12 md:pl-10'>Tambah Kegiatan</Typography>
                  </ListItemButton>
                </Link>
              </List>
            </Collapse>
          </Link>
        </ListItem>
      </List>
    </>
  )
  
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <ElevationScroll>
          <AppBar position="fixed" open={open} className={trigger ? 'backdrop-blur-[5px] bg-white/80 shadow-sm' : 'bg-white'}>
            <Toolbar className='pl-0'>
              <Stack direction='row' justifyContent='space-between' alignItems='center' className='w-full'>
                <Stack className='transition-all duration-2000 ease-in-out' direction='row' alignItems='center' spacing={1}>
                  <Stack className='bg-[#323742] w-16 h-16 xs:flex md:hidden' justifyContent='center' alignItems='center'>
                    <Link href='/users/dashboard'>
                      <Image src='/images/logo-sm.png' width={30} height={30} alt='logo' className=''/> 
                    </Link>
                  </Stack>
                  <IconButton aria-label="open drawer" className={!open? 'translate-x-16 transition-all duration-200 ease-in-out rotate-90 text-primary xs:hidden md:flex' : 'hover:text-primary  xs:hidden md:flex'} onClick={!open? handleDrawerOpen : handleDrawerClose} edge="start">
                    <MenuIcon />
                  </IconButton>
                  <DrawerMobile listMenu={listMenu}/>
                </Stack>
                <Stack direction='row' alignItems='center'>
                    <AppnavMenu />
                </Stack>
              </Stack>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Drawer variant="permanent" open={open} PaperProps={{ sx: { backgroundColor: '#323742', color: '#9ca3af', display: {xs: 'none', md: 'block'} }}}>
          <DrawerHeader>
              {
                !open? 
                <Link href='/users/dashboard'>
                  <Image src='/images/logo-sm.png' width={30} height={30} alt='logo' className=''/> 
                </Link>
                : 
                <Link href='/users/dashboard'>
                  <Image src='/images/logo-color.png' width={90} height={30} alt='logo' className=''/>
                </Link>
              }
          </DrawerHeader>
          <Divider className='border-gray-700' />
            {listMenu}
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, pt: 3, px: 3 }} className='min-h-screen'>
          <DrawerHeader />
          {children}
          <FooterDashboard />
        </Box>
      </Box>
    </>
  )
}
