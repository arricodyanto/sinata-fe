import React from 'react'
import { Box, Button, Drawer, IconButton, PaperProps } from '@mui/material';

type TDrawerItemsProps = {
    alt: string
    icon: React.ReactNode,
    children: React.ReactNode
}

type Anchor = 'top'

export default function DrawerItems(props: TDrawerItemsProps & Partial<PaperProps>) {
    const { alt, icon, children } = props
    const [drawer, setDrawer] = React.useState({ 
        top: false,
        left: false,
        bottom: false,
        right: false,
    })
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

    const list = (anchor: Anchor) => (
        <Box className='p-3'>
            {children}
        </Box>
    )
  return (
    <>
        {(['top'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
                <IconButton className='hover:text-primary' onClick={toggleDrawer(anchor, true)} aria-label={alt}>{icon}</IconButton>
                <Drawer PaperProps={{sx:{ marginX: 2, marginTop: 1, borderRadius: 1.5}}} anchor={anchor} open={drawer[anchor]} onClose={toggleDrawer(anchor, false)} className='translate-y-[70px] z-20'>
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        ))}
    </>
  )
}
