import React from 'react';
import Classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            my posts
            <div> new post</div>
            <div className={Classes.item}>
                <Post message='How are you?' likeCounts="15" />
                <Post message='It`s my first post' likeCounts="12" />
                <Post message='Another message' likeCounts="4" />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;