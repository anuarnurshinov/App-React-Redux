import React from 'react';
import Classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={Classes.item}>
            <img className={Classes.itemImg} src='https://e7.pngegg.com/pngimages/78/788/png-clipart-computer-icons-avatar-business-computer-software-user-avatar-child-face.png' alt='' />
            {props.message}
            <div><span> Like {props.likeCounts} </span></div>
            <div><span> Dislike </span></div>

        </div>
    )
}

export default Post;