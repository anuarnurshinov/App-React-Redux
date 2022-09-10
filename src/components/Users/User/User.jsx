import React from 'react'

import Classes from './User.module.css'
import userPhoto from '../../../assets/images/user.png'
import { NavLink } from 'react-router-dom';
import {
    Button,
    List, ListItem, Divider,
    ListItemText, ListItemAvatar,
    Avatar, Typography,
} from '@mui/material/';

// user.id

const User = ({ user, onClickSendUnfollowToServer, onClickSendFollowToServer }) => {
    return <div >
        <List sx={{ width: '100%', }}>
            <ListItem
                onClick={() => { }}
                button={true}
                alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={user.photos.small != null ? user.photos.small : userPhoto} />
                </ListItemAvatar>
                <ListItemText
                    primary={user.name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                {user.status}
                            </Typography>
                        </React.Fragment>
                    }

                />
                {user.followed ?
                    <Button variant={'contained'}
                        onClick={() => { onClickSendUnfollowToServer(user.id) }}> Unfollow </Button> :
                    <Button variant={'contained'}
                        onClick={() => { onClickSendFollowToServer(user.id) }}> Follow </Button>}
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>
    </div>

}

export default User;















