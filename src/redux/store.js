let store = {
    getState() {
        return this._state
    }
    ,
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
        },
        sidebar: {
        },
    },
    callSubscriber() {
    },
    subscribe(observer) {
        this.callSubscriber = observer
    },
    _addPost() {
        let newPost = {
            id: '5',
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this.callSubscriber(this._state)
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this.callSubscriber(this._state)
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            this._addPost()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText)
        }
    }

}







export { store }
window.store = store