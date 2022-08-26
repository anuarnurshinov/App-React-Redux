import { usersAPI } from './../../api/api';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const MOVE_GALLERY_RIGHT = 'MOVE_GALLERY_RIGHT'
const MOVE_GALLERY_LEFT = 'MOVE_GALLERY_LEFT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    galleryPosition: 0,
    isFetching: true,
}

export const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                }),

            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                }),

            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            }
        case MOVE_GALLERY_RIGHT:
            return {
                ...state,
                galleryPosition: state.galleryPosition - 15
            }
        case MOVE_GALLERY_LEFT:
            return {
                ...state,
                galleryPosition: state.galleryPosition + 15
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.toggle
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId, })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const moveGalleryRight = (currentPage) => ({ type: MOVE_GALLERY_RIGHT, currentPage })
export const moveGalleryLeft = (currentPage) => ({ type: MOVE_GALLERY_LEFT, currentPage })
export const toggleIsFetching = (toggle) => ({ type: TOGGLE_IS_FETCHING, toggle })


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            });
    }
}
export const onPageChangedThunkCreator = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        usersAPI.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
            });
    }
}
export const addFollowThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.postFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
            });
    }
}
export const deleteFollowThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.deleteFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
            });
    }
}
