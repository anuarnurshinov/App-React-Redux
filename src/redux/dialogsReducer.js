const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({
                id: '5',
                message: body,
            })
            return state
        default:
            return state
    }
}
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text,
    }
}
