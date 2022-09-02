import { authAPI } from '../../api/api';
const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'
const DELETE_AUTH_USER_DATA = 'auth/DELETE_AUTH_USER_DATA'
const GET_USER_PHOTO = 'auth/GET_USER_PHOTO'


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
        case GET_USER_PHOTO:
            return {
                ...state,
                smallUserPhoto: action.photo,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_AUTH_USER_DATA, data: { userId, email, login } })
export const deleteAuthUserData = () => ({ type: DELETE_AUTH_USER_DATA })




export const setAuthUserDataThunkCreator = () => async (dispatch) => {
    let data = await authAPI.getAuthData()
    if (data.resultCode === 0) {
        let { id, email, login } = data.data
        dispatch(setAuthUserData(id, email, login))
    }

}


export const getAuthorizedThunkCreator = (formData) => async (dispatch) => {
    let data = await authAPI.getAuthorized(formData)
    if (data.resultCode === 0) {
        dispatch(setAuthUserDataThunkCreator())
    }
}

export const deleteAuthorizedThunkCreator = () => async (dispatch) => {
    let data = await authAPI.deleteAuthorization()
    if (data.resultCode === 0) {
        dispatch(deleteAuthUserData())
    }
}


