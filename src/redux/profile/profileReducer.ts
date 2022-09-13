import { profileAPI } from "../../api/api";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT";
const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const UPDATE_STATUS = "profile/UPDATE_STATUS";
const UPDATE_PHOTO = "profile/UPDATE_PHOTO";
const UPDATE_PROFILE_INFORMATION = "profile/UPDATE_PROFILE_INFORMATION";

type initialStateType = typeof initialState;

type postsType = {
  id: number;
  message: string;
  likesCount: number;
};

type profileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  photos: photosType;
  contacts: contactType;
  aboutMe: string;
};

type contactType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
};

type photosType = {
  small: string | null;
  large: string | null;
};

let initialState = {
  posts: [
    {
      id: 1,
      message: "How are you?",
      likesCount: 2,
    },
  ] as Array<postsType>,
  profile: null as profileType | null,
  status: "" as string,
  newPostText: "" as string,
  newStatusText: "" as string,
};

export const profileReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            message: action.postText,
            likesCount: 0,
          },
        ],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case UPDATE_STATUS:
      return {
        ...state,
        status: state.newStatusText,
      };
    case UPDATE_PHOTO:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        } as profileType,
      };
    case UPDATE_PROFILE_INFORMATION:
      return {
        ...state,
        profile: {
          ...state.profile,
          aboutMe: action.data.aboutMe,
          contacts: action.data.contacts,
          fullName: action.data.fullName,
          lookingForAJob: action.data.lookingForAJob,
          lookingForAJobDescription: action.data.lookingForAJobDescription,
        } as profileType,
      };
    default:
      return state;
  }
};

type addPostType = {
  type: typeof ADD_POST;
  postText: string;
};
type updateNewPostTextType = {
  type: typeof UPDATE_NEW_POST_TEXT;
  newText: string;
};
type setUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: profileType;
};
type setStatusType = {
  type: typeof SET_STATUS;
  status: string;
};

type updateNewStatusType = {
  type: typeof UPDATE_STATUS;
};
type updatePhotoType = {
  type: typeof UPDATE_PHOTO;
  photos: photosType;
};
type updateProfileInfoType = {
  type: typeof UPDATE_PROFILE_INFORMATION;
  data: string;
};

export const addPost = (postText: string): addPostType => ({
  type: ADD_POST,
  postText,
});

export const updateNewPostTextActionCreator = (
  text: string
): updateNewPostTextType => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const setUserProfile = (profile: profileType): setUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});

export const setStatus = (status: string): setStatusType => ({
  type: SET_STATUS,
  status,
});

export const updateNewStatus = (): updateNewStatusType => ({
  type: UPDATE_STATUS,
});

export const updatePhoto = (photos: photosType): updatePhotoType => ({
  type: UPDATE_PHOTO,
  photos,
});

export const updateProfileInfo = (data: string): updateProfileInfoType => ({
  type: UPDATE_PROFILE_INFORMATION,
  data,
});

export const getUserProfileThunkCreator =
  (userId: any) => async (dispatch: any) => {
    let data = await profileAPI.getUserProfile(userId);
    dispatch(setUserProfile(data));
  };

export const getStatusThunkCreator = (userId: any) => async (dispatch: any) => {
  let status = await profileAPI.getStatus(userId);
  dispatch(setStatus(status));
};

export const sendNewStatusThunkCreator =
  (status: any) => async (dispatch: any) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  };

export const savePhotoThunkCreator = (photo: any) => async (dispatch: any) => {
  let data = await profileAPI.sendPhoto(photo);
  if (data.resultCode === 0) {
    dispatch(updatePhoto(data.data.photos));
  }
};

export const updateProfileInfoThunkCreator =
  (data: any) => async (dispatch: any) => {
    let response = await profileAPI.sendProfileInformation(data);
    if (response.resultCode === 0) {
      dispatch(updateProfileInfo(data));
    }
  };
