import React from 'react';

import Classes from './Post.module.css'
import Avatar from '@mui/material/Avatar';

const Post = (props) => {
    return (
        <div className={Classes.item}>
            <Avatar alt="Remy Sharp" src={props.ownerPhoto} />
            <p className={Classes.item}>
                {props.message}
            </p>
            <div className={Classes.center}>
                <div className={Classes.dialog1}>
                    <div className={Classes.leftPoint}></div>
                </div>

                <div className={Classes.dialog2}>
                    <div className={Classes.rightPoint}></div>
                </div>
            </div>


            <div><span> Like {props.likeCounts} </span></div>
            <div><span> Dislike </span></div>

        </div>
    )
}

export default Post;