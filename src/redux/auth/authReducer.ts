import { authAPI } from "../../api/api";
import {
  SET_AUTH_USER_DATA,
  DELETE_AUTH_USER_DATA,
  GET_USER_PHOTO,
  setAuthUserDataType,
  deleteAuthUserDataType,
} from "./authReducerTypes";

type initialStateType = typeof initialState;
let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isFetching: true as boolean,
  isAuth: false as boolean,
  smallUserPhoto: null as string | null,
};

export const authReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case DELETE_AUTH_USER_DATA:
      return {
        ...state,
        isAuth: false,
        login: null,
        email: null,
        userId: null,
      };
    case GET_USER_PHOTO:
      return {
        ...state,
        smallUserPhoto: action.photo,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (
  userId: number,
  email: string,
  login: string
): setAuthUserDataType => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login },
});

export const deleteAuthUserData = (): deleteAuthUserDataType => ({
  type: DELETE_AUTH_USER_DATA,
});

export const setAuthUserDataThunkCreator = () => async (dispatch: any) => {
  let data = await authAPI.getAuthData();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login));
  }
};

export const getAuthorizedThunkCreator =
  (formData: any) => async (dispatch: any) => {
    let data = await authAPI.getAuthorized(formData);
    if (data.resultCode === 0) {
      dispatch(setAuthUserDataThunkCreator());
    }
  };

export const deleteAuthorizedThunkCreator = () => async (dispatch: any) => {
  let data = await authAPI.deleteAuthorization();
  if (data.resultCode === 0) {
    dispatch(deleteAuthUserData());
  }
};
