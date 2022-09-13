export const SET_INITIALIZATION_SUCCESS = 'app/SET_INITIALIZATION_SUCCESS'


export type initialStateType = {
    initialized: boolean,
}
export type initializationSuccessType = {
    type: typeof SET_INITIALIZATION_SUCCESS
}