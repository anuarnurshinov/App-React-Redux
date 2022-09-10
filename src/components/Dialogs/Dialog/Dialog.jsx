import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    List, ListItem, Divider,
    ListItemText, ListItemAvatar,
    Avatar, Typography,
} from '@mui/material/';

const Dialog = (props) => {
    let navigate = useNavigate()

    const msToTime = () => {
        let dateNow = new Date()
        let offlineTime = dateNow - Date.parse(props.dialog.lastUserActivityDate)
        let minutes = parseInt((offlineTime / (1000 * 60)) % 60),
            hours = parseInt((offlineTime / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;

        return hours + " часа " + minutes + " минуты ";
    }
    const onClickGoToChat = () => {
        navigate(`${props.dialog.id}`)
    }

    return (
        <List sx={{ width: '100%', }}>
            <ListItem
                onClick={() => { onClickGoToChat() }}
                button={true}
                alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={props.dialog.photos ? props.dialog.photos.small : ''} />
                </ListItemAvatar>
                <ListItemText
                    primary={props.dialog.userName}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >

                            </Typography>
                            {`Был в сети ${msToTime()} назад`}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </List>

    )
}

export default Dialog;
