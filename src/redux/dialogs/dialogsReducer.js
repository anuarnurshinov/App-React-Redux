import { dialogsAPI } from '../../api/api.js'


const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'
const GET_ALL_DIALOGS = 'dialogs/GET_ALL_DIALOGS'
const GET_MESSAGES = 'dialogs/GET_MESSAGES'

let initialState = {
    messages: [
        {
            id: '1',
            message: 'Hello'
        },
    ],
    dialogs: [
        {
            id: '1',
            name: 'Dima'
        },
    ],
    newMessageBody: '',

}


export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        case GET_ALL_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs,
            }
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.messages,
            }
        default:
            return state
    }
}


export const getAllDialogs = (dialogs) => ({ type: GET_ALL_DIALOGS, dialogs })
export const getMessages = (messages) => ({
    type: GET_MESSAGES, messages
})
export const addSendedMessage = (message) => ({
    type: SEND_MESSAGE,
    message
})

export const getAllDialogsThunk = () => async (dispatch) => {
    let data = await dialogsAPI.getAllDialogs()
    dispatch(getAllDialogs(data))
}

export const startChatThunk = (userId) => async (dispatch) => {
    let data = await dialogsAPI.startChat(userId)
    if (data.resultCode === 0) {
        dispatch(getAllDialogsThunk())
    }
}

export const getMessagesThunk = (userId) => async (dispatch) => {

    let data = await dialogsAPI.getMessages(userId)

    if (!data.errors) {

        dispatch(getMessages(data.items))

    }
}

export const sendMessageThunk = (message, userId) => async (dispatch) => {

    let data = await dialogsAPI.sendMessage(message, userId)
    if (data.resultCode === 0) {
        dispatch(addSendedMessage(data.data.message))
    }
}