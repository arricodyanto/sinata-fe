import React from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, makeStyles } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function DrawerMobile() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side: 'left', open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (
    <div
      className='w-[250px] text-white'
      role="presentation"
      onClick={toggleDrawer('left', false)}
      onKeyDown={toggleDrawer('left', false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer('left', true)}
        className='hover:text-primary text-gray-500 xs:flex md:hidden h-[36px] ml-1'
      >
        <MenuIcon fontSize='small' />
      </IconButton>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        PaperProps={{ sx: {backgroundColor: '#323742'}}}
      >
        {sideList}
      </Drawer>
    </div>
  );
};
