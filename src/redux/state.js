import { renderEntireTree } from "../render"

let state = {
    profilePage: {
        posts: [
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

        ],
    },
    dialogsPage: {
        messages: [
            {
                id: '1',
                message: 'Hello'
            },
            {
                id: '2',
                message: 'GoodBy'
            },
            {
                id: '3',
                message: "What's up?"
            },
            {
                id: '4',
                message: 'Where are u?'
            },
        ],
        dialogs: [
            {
                id: '1',
                name: 'Dima'
            },
            {
                id: '2',
                name: 'Anuar'
            },
            {
                id: '3',
                name: 'Vasya'
            },
            {
                id: '4',
                name: 'Anya'
            },
        ],
    },
    sidebar: {
    },
}
export let addPost = (postMessage) => {
    let newPost = {
        id: '5',
        message: postMessage,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    renderEntireTree(state)
}
export { state }