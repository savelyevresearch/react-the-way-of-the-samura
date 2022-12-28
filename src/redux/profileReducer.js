import { profileAPI } from "../api/api";

const ADD_POST = "profileReducer/ADD-POST";
const REMOVE_POST = "profileReducer/REMOVE-POST";
const SET_USER_PROFILE = "profileReducer/SET-USER-PROFILE";
const SET_USER_STATUS = "profileReducer/SET-USER-STATUS";
const SET_USER_PHOTO = "profileReducer/SET-USER-PHOTO";

const profileState = {
  profileInfoState: null,
  postState: [
    {
      message: "Hi, how are you? Today I'm learning JS",
      likeCount: 10,
      userAvatarUrl:
        "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
      userAvatarAlt: "some avatar",
      id: 1,
    },
    {
      message: "It's my first post",
      likeCount: 5,
      userAvatarUrl:
        "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
      userAvatarAlt: "some avatar",
      id: 2,
    },
  ],
  status: null,
};

const profileReducer = (state = profileState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postState: [
          ...state.postState,
          {
            message: action.postText,
            likeCount: 0,
            userAvatarUrl:
              "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
            userAvatarAlt: "some avatar",
            id: state.postState.length + 1,
          },
        ],
      };
    }
    case REMOVE_POST: {
      const maxPostId = Math.max(...state.postState.map((post) => post.id));

      return {
        ...state,
        postState:
          action.postId > maxPostId || action.postId < 1
            ? state
            : state.postState.filter((post) => post.id != action.postId),
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profileInfoState: action.profile,
      };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_USER_PHOTO: {
      return {
        ...state,
        profileInfoState: { ...state.profileInfoState, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

export const setUserProfileAC = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const addPostActionCreator = (postText) => ({
  type: ADD_POST,
  postText,
});

export const removePostActionCreator = (postId) => ({
  type: REMOVE_POST,
  postId,
});

export const setUserStatusAC = (status) => ({
  type: SET_USER_STATUS,
  status,
});

export const setUserPhotoAC = (photos) => ({
  type: SET_USER_PHOTO,
  photos,
});

export const getProfileThunkCreator = (userId) => async (dispatch) => {
  try {
    const responseData = await profileAPI.getProfile(userId);

    dispatch(setUserProfileAC(responseData));
  } catch (error) {
    console.error(`Something went wrong (request error): ${error.message}`);
  }
};

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {
  try {
    const responseData = await profileAPI.getStatus(userId);

    dispatch(setUserStatusAC(responseData));
  } catch (error) {
    console.error(`Something went wrong (request error): ${error.message}`);
  }
};

export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
  try {
    const response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setUserStatusAC(status));
    } else {
      console.log("The resultCode property is equal to 1");
    }
  } catch (error) {
    console.error(`Something went wrong (request error): ${error.message}`);
  }
};

export const savePhotoThunkCreator = (file) => async (dispatch) => {
  try {
    const response = await profileAPI.savePhoto(file);

    if (response.data.resultCode == 0) {
      dispatch(setUserPhotoAC(response.data.data.photos));
    } else {
      console.log("The resultCode property is equal to 1");
    }
  } catch (error) {
    console.error(`Something went wrong (request error): ${error.message}`);
  }
};

export default profileReducer;
