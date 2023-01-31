import { Button } from '@mui/material';
import React from 'react'
import FullscreenButton from '../../atoms/FullscreenButton';
import AvatarNavIcon from '../../molecules/AvatarNavIcon';
import NotifNavIcon from '../../molecules/NotifNavIcon';
import SearchNavIcon from '../../molecules/SearchNavIcon';

export default function AppnavMenu() {
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    const handleFullscreen = () => {
        if (isFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
        } else {
        document.documentElement.requestFullscreen();
        setIsFullscreen(true);
        }
    }

  return (
    <>  
        <SearchNavIcon />
        <FullscreenButton />
        <NotifNavIcon />
        <AvatarNavIcon />
    </>
  )
}
