import { Box, IconButton, Popover } from '@mui/material'
import React from 'react'

type TIconPopoverProps = {
    alt: string
    icon: React.ReactNode
    children: React.ReactNode
}

export default function IconPopover(props: TIconPopoverProps) {
    const { alt, icon, children } = props
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    const content = () => (
        <Box className='p-4'>
            {children}
        </Box>
    )
  return (
    <>
        <IconButton className={anchorEl? 'text-primary' : ''} aria-label={alt} aria-describedby={id} onClick={handleClick}>{icon}</IconButton>
        <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} className='translate-y-5' anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }} PaperProps={{sx: {boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'}}} transitionDuration={0}>
            {content()}
        </Popover>
    </>
  )
}
