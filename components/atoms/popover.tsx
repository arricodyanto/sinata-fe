import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

interface PopoverData {
  id: string;
  content: string;
}

const data: PopoverData[] = [
  {
    id: '1',
    content: 'This is popover 1',
  },
  {
    id: '2',
    content: 'This is popover 2',
  },
  {
    id: '3',
    content: 'This is popover 3',
  },
];

const MultiplePopovers = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentPopover, setCurrentPopover] = useState<null | PopoverData>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, popover: PopoverData) => {
    setAnchorEl(event.currentTarget);
    setCurrentPopover(popover);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentPopover(null);
  };

  return (
    <div>
      {data.map((popover) => (
        <Button key={popover.id} onClick={(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClick(event, popover)}>
          Hover for popover {popover.id}
        </Button>
      ))}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          {currentPopover ? currentPopover.content : ''}
        </Typography>
      </Popover>
    </div>
  );
};

export default MultiplePopovers;
