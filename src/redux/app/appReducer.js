import { setAuthUserDataThunkCreator } from '../auth/authReducer';

const SET_INITIALIZATION_SUCCESS = 'app/SET_INITIALIZATION_SUCCESS'

let initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}
export const initializationSuccess = () => ({
    type: SET_INITIALIZATION_SUCCESS,
})
export const initialize = () => async (dispatch) => {
    await dispatch(setAuthUserDataThunkCreator())
    dispatch(initializationSuccess())
}