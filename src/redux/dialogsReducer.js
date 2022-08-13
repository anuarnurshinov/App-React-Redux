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
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {
                    id: `${state.messages.length + 1}`,
                    message: body,
                }]
            }
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
