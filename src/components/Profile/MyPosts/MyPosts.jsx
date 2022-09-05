import React from 'react';
import Classes from './MyPosts.module.css'
import MyPostsForm from './MyPostForm/MyPostsForm';
import Post from './Post/Post';





const MyPosts = (props) => {
    let postsElements = props.posts.map((post) => {
        return <Post
            {...props}
            message={post.message}
            likeCounts={post.likesCount}
            key={post.id} />
    })


    return (
        <div className={Classes.block}>
            <MyPostsForm addPost={props.addPost} />
            <div className={Classes.item}>
                {postsElements}
            </div>
        </div>
    )
}



export default MyPosts;