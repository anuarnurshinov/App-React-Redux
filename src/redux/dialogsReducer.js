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
            message: 'Whats up?'
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
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: `${state.messages.length + 1}`,
                    message: action.messageText,
                }]
            }
        default:
            return state
    }
}
export const sendMessageCreator = (messageText) => ({ type: SEND_MESSAGE, messageText })
