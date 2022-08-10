import React from 'react';
import Classes from './MyPosts.module.css'
import Post from './Post/Post';




const MyPosts = (props) => {
    let postsElements = props.posts.map((post) => {
        return <Post message={post.message} likeCounts={post.likesCount} />
    })
    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={Classes.block}>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
            </div>
            <div>
                <button onClick={onAddPost}>
                    Оставить запись
                </button>
                <button onClick={onAddPost}>
                    Удалить запись
                </button>
            </div>
            <div> new post</div>
            <div className={Classes.item}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts;