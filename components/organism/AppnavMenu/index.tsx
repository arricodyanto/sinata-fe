import React from 'react'
import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Slide, Stack, Typography } from '@mui/material'
import IconPopover from '../../molecules/IconPopover'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


export default function AppnavMenu() {
  return (
    <>
        <IconPopover alt='notif-icon' icon={<NotificationsNoneIcon />}>
            <Slide direction='down' in={true} mountOnEnter unmountOnExit timeout={100}>
                <Box className='xs:w-[85vw] sm:w-80'>
                    <Stack direction='row' justifyContent='space-between' alignItems='center' className='mb-3'>
                        <Typography variant='body2' className='text-gray-600 font-medium'>Notifications</Typography>
                        <Button variant='text' className='text-gray-600 hover:text-primary'>
                            <Typography variant='body2' className='capitalize text-xs'>Clear All</Typography>
                        </Button>
                    </Stack>
                    <Box className='-mx-4 h-[316px] overflow-y-auto'>
                        <List>
                            <ListItem disablePadding className='max-h-[70px]'>
                                <ListItemButton className='px-6'>
                                    <ListItemAvatar>
                                        <Avatar alt='John Doe' src='/images/avatar/avatar-6.jpg' />
                                    </ListItemAvatar>
                                    <ListItemText primary='John Doe' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                                </ListItemButton>
                            </ListItem>
                            <Divider light className='pb-0'/>
                            <ListItem disablePadding className='max-h-[70px]'>
                                <ListItemButton className='px-6'>
                                    <ListItemAvatar>
                                        <Avatar alt='John Doe' src='/images/avatar/avatar-5.jpg' />
                                    </ListItemAvatar>
                                    <ListItemText primary='John Doe' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                                </ListItemButton>
                            </ListItem>
                            <Divider light className='pb-0'/>
                            <ListItem disablePadding className='max-h-[70px]'>
                                <ListItemButton className='px-6'>
                                    <ListItemAvatar>
                                        <Avatar alt='John Doe' src='/images/avatar/avatar-4.jpg' />
                                    </ListItemAvatar>
                                    <ListItemText primary='John Doe' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                                </ListItemButton>
                            </ListItem>
                            <Divider light className='pb-0'/>
                            <ListItem disablePadding className='max-h-[70px]'>
                                <ListItemButton className='px-6'>
                                    <ListItemAvatar>
                                        <Avatar alt='John Doe' src='/images/avatar/avatar-3.jpg' />
                                    </ListItemAvatar>
                                    <ListItemText primary='John Doe' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                                </ListItemButton>
                            </ListItem>
                            <Divider light className='pb-0'/>
                            <ListItem disablePadding className='max-h-[70px]'>
                                <ListItemButton className='px-6'>
                                    <ListItemAvatar>
                                        <Avatar alt='John Doe' src='/images/avatar/avatar-2.jpg' />
                                    </ListItemAvatar>
                                    <ListItemText primary='John Doe' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                                </ListItemButton>
                            </ListItem>
                            <Divider light className='pb-0'/>
                            <ListItem disablePadding className='max-h-[70px]'>
                                <ListItemButton className='px-6'>
                                    <ListItemAvatar>
                                        <Avatar alt='John Doe' src='/images/avatar/avatar-1.jpg' />
                                    </ListItemAvatar>
                                    <ListItemText primary='John Doe' secondary='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' className='truncate'/>
                                </ListItemButton>
                            </ListItem>
                            <Divider light className='pb-0'/>
                        </List>
                    </Box>
                    <Button fullWidth variant='text' className='text-primary text-sm capitalize mt-2 h-9'>View All</Button>
                </Box>
            </Slide>
        </IconPopover>
    </>
  )
}