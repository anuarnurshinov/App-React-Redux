export const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
export const DELETE_AUTH_USER_DATA = "auth/DELETE_AUTH_USER_DATA";
export const GET_USER_PHOTO = "auth/GET_USER_PHOTO";

export type setAuthUserDataType = {
  type: typeof SET_AUTH_USER_DATA;
  data: setAuthUserDataPayloadData;
};

export type setAuthUserDataPayloadData = {
  userId: number;
  email: string;
  login: string;
};

export type deleteAuthUserDataType = {
  type: typeof DELETE_AUTH_USER_DATA;
};
