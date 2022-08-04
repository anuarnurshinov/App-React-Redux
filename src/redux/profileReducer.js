const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
export const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: '5',
            message: state.newPostText,
            likesCount: 0,
        }
        debugger;
        state.posts.push(newPost)
        state.newPostText = ''
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText
    }

    return state
}