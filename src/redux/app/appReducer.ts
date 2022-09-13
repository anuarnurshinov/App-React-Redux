import { setAuthUserDataThunkCreator } from "../auth/authReducer";
import {
  initializationSuccessType,
  initialStateType,
  SET_INITIALIZATION_SUCCESS,
} from "./appReducerTypes";

let initialState: initialStateType = {
  initialized: false,
};

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INITIALIZATION_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializationSuccess = (): initializationSuccessType => ({
  type: SET_INITIALIZATION_SUCCESS,
});

export const initialize = () => async (dispatch: any) => {
  await dispatch(setAuthUserDataThunkCreator());
  dispatch(initializationSuccess());
};
