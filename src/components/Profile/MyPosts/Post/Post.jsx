import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Classes from './Post.module.css'
import Avatar from '@mui/material/Avatar';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const Post = (props) => {
    return (
        <div className={Classes.item}>
            <div className={Classes.userInfoContainer}>
                <div className={Classes.avatar}><Avatar alt="Remy Sharp" src={props.profile.photos.small} />
                </div>
                <div className={Classes.login}><a href='#'>{props.profile.fullName}</a></div></div>
            <span className={Classes.item}>
                <div className={Classes.speechBubble}>
                    {props.message}
                    <div className={Classes.Likes}> <span> <ThumbUpIcon />  {props.likeCounts} </span>
                        <span> <ThumbDownIcon /> 0 </span></div>

                </div>

            </span>




        </div>
    )
}

export default Post;