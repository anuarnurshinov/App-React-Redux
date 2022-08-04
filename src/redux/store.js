import { dialogsReducer } from "./dialogsReducer"
import { profileReducer } from "./profileReducer"
import { sidebarReducer } from "./sidebarReducer"


const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: {
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
            newPostText: 'itKama',
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
            newMessageBody: '',
        },
        sidebar: {
        },
    },
    getState() {
        return this._state
    },
    callSubscriber() {
    },
    subscribe(observer) {
        this.callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this.callSubscriber(this._state)
    }
}




export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}



export { store }
window.store = store