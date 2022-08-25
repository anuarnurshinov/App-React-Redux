import { authAPI } from './../api/api';
const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const DELETE_AUTH_USER_DATA = 'DELETE_AUTH_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        case DELETE_AUTH_USER_DATA:
            return {
                ...state,
                isAuth: false,
                login: null,
                email: null,
                userId: null,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login } })
export const deleteAuthUserData = () => ({ type: DELETE_AUTH_USER_DATA })

export const setAuthUserDataThunkCreator = () => {
    return (dispatch) => {
        return authAPI.getAuthData()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            });
    }
}

export const getAuthorizedThunkCreator = (formData) => {
    return (dispatch) => {
        authAPI.getAuthorized(formData)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserDataThunkCreator())
                }
            })
    }
}

export const deleteAuthorizedThunkCreator = () => {
    return (dispatch) => {
        authAPI.deleteAuthorization()
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(deleteAuthUserData())
                }
            })
    }
}