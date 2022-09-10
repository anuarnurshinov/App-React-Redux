
import React from 'react';
import { Avatar } from '@mui/material';
import Classes from './Message.module.css'

const Message = (props) => {
    return (
        <>
            <div className={Classes.container}>
                <div> <Avatar className={Classes.avatar} component={'span'} sx={{ position: 'absolute' }} alt="Remy Sharp" src={props.photo} /></div>
                <div className={Classes.message}> {props.message} </div>
                <div className={Classes.login}> <h5 style={{}}>{props.login}</h5> </div>
            </div>

        </>
    )
}

export default Message;

// props.dialog.photos ? props.dialog.photos.small : ''