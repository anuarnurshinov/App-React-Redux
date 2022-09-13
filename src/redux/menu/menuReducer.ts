import { profileAPI } from "../../api/api";

const GET_USER_PHOTO = "auth/GET_USER_PHOTO";

let initialState = {
  smallUserPhoto: null as string | null,
};

export type initialStateType = typeof initialState;

export type getSmallPhotoType = {
  type: typeof GET_USER_PHOTO;
  photo: string;
};

export const menuReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case GET_USER_PHOTO:
      return {
        ...state,
        smallUserPhoto: action.photo,
      };
    default:
      return state;
  }
};

export const getSmallPhoto = (photo: any): getSmallPhotoType => ({
  type: GET_USER_PHOTO,
  photo,
});

export const getSmallPhotoThunkCreator =
  (ownerId: any) => async (dispatch: any) => {
    let data = await profileAPI.getUserProfile(ownerId);
    dispatch(getSmallPhoto(data.photos.small));
  };
