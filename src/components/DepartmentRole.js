import * as React from 'react';
import { Typography } from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import './Style.css';
export default function dashboard() {
    return (
        <>
          <div className='col-2 card'>
            hello world
          </div>
          <div className='row heading'>
            <Typography variant='h4'><b>Manage User</b></Typography>
            <NotificationAddIcon className='icon'  color="primary"></NotificationAddIcon>
            <Avatar className='avatar' alt="Remy Sharp" src="/static/images/avatar/1.jpg"></Avatar>
          </div>       
        </>
    );
}

