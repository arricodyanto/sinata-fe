import React from 'react'
import AvatarNavIcon from '../../molecules/AvatarNavIcon';
import NotifNavIcon from '../../molecules/NotifNavIcon';
import SearchNavIcon from '../../molecules/SearchNavIcon';

export default function AppnavMenu() {
  return (
    <>  
        <SearchNavIcon />
        <NotifNavIcon />
        <AvatarNavIcon />
    </>
  )
}
