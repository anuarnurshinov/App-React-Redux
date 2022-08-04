import React from 'react';
import Classes from './MyPosts.module.css'
import Post from './Post/Post';
import { updateNewPostTextActionCreator } from '../../../redux/store';
import { addPostActionCreator } from './../../../redux/store';



const MyPosts = (props) => {
    let postsElements = props.state.map((post) => {
        return <Post message={post.message} likeCounts={post.likesCount} />
    })
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={Classes.block}>
            <div>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
            </div>
            <div>
                <button onClick={addPost}>
                    Оставить запись
                </button>
                <button onClick={addPost}>
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