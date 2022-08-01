import React from 'react';
import Classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.state.map((post) => {
        return <Post message={post.message} likeCounts={post.likesCount} />
    })
    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)

    }

    return (
        <div className={Classes.block}>
            <div>
                <textarea ref={newPostElement}>

                </textarea>
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