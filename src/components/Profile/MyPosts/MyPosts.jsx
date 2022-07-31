import React from 'react';
import Classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    let posts = [
        {
            id: '1',
            message: 'How are you?',
            likesCount: '12',
        },
        {
            id: '2',
            message: 'It`s my first post',
            likesCount: '11',
        },
        {
            id: '3',
            message: 'Another message',
            likesCount: '3',
        },

    ]
    let postsElements = posts.map((post) => {
        return <Post message={post.message} likeCounts={post.likesCount} />
    })

    return (
        <div className={Classes.block}>
            my posts
            <div> new post</div>
            <div className={Classes.item}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;