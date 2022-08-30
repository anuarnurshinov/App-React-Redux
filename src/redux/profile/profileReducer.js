import { profileAPI } from '../../api/api';
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT'
const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'
const UPDATE_STATUS = 'profile/UPDATE_STATUS'

let initialState = {
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
    profile: null,
    status: '',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: `${state.posts.length + 1}`,
                    message: action.postText,
                    likesCount: 0,
                }],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_STATUS:
            return {
                ...state,
                status: state.newStatusText
            }
        default:
            return state;
    }
}

export const addPost = (postText) => ({ type: ADD_POST, postText })

export const updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile,
    }
}

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
})

export const updateNewStatus = () => ({
    type: UPDATE_STATUS,
})



export const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatusThunkCreator = (userId) => async (dispatch) => {
    let status = await profileAPI.getStatus(userId)
    dispatch(setStatus(status))
}

export const sendNewStatusThunkCreator = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

