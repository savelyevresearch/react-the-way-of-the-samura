import { profileAPI } from "../api/api";

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
    case "ADD-POST": {
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
    case "REMOVE-POST": {
      const maxPostId = Math.max(...state.postState.map((post) => post.id));

      return {
        ...state,
        postState: (action.postId > maxPostId) || (action.postId < 1)
          ? state
          : state.postState.filter((post) => post.id != action.postId),
      };
    }
    case "SET-USER-PROFILE": {
      return {
        ...state,
        profileInfoState: action.profile,
      };
    }
    case "SET-USER-STATUS": {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const setUserProfileAC = (profile) => ({
  type: "SET-USER-PROFILE",
  profile,
});

export const addPostActionCreator = (postText) => ({
  type: "ADD-POST",
  postText,
});

export const removePostActionCreator = (postId) => ({
  type: "REMOVE-POST",
  postId,
});

export const updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newPostText: text,
});

export const setUserStatusAC = (status) => ({
  type: "SET-USER-STATUS",
  status,
});

export const getProfileThunkCreator = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((data) => {
    dispatch(setUserProfileAC(data));
  });
};

export const getUserStatusThunkCreator = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setUserStatusAC(data));
  });
};

export const updateUserStatusThunkCreator = (status) => (dispatch) => {
  profileAPI
    .updateStatus(status)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatusAC(status));
      } else {
        console.log("The resultCode property is equal to 1");
      }
    })
    .catch((error) => {
      console.error(`Some went wrong (request error): ${error.message}`);
    });
};

export default profileReducer;
