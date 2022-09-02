import { profileAPI } from '../../api/api';

const GET_USER_PHOTO = 'auth/GET_USER_PHOTO'


let initialState = {
    smallUserPhoto: null,
}

export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PHOTO:
            return {
                ...state,
                smallUserPhoto: action.photo,
            }
        default:
            return state;
    }
}


export const getSmallPhoto = (photo) => ({
    type: GET_USER_PHOTO,
    photo,
})



export const getSmallPhotoThunkCreator = (ownerId) => async (dispatch) => {
    let data = await profileAPI.getUserProfile(ownerId)
    dispatch(getSmallPhoto(data.photos.small))
}

