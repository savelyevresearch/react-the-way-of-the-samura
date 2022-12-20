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
    },
    {
      message: "It's my first post",
      likeCount: 5,
      userAvatarUrl:
        "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
      userAvatarAlt: "some avatar",
    },
  ],
  newPostText: "Type a text...",
  status: null,
};

const profileReducer = (state = profileState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      let stateCopy = { ...state };

      stateCopy.postState = [...state.postState];
      stateCopy.profileInfoState = { ...state.profileInfoState };

      stateCopy.postState.push({
        message: state.newPostText,
        likeCount: 0,
        userAvatarUrl:
          "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
        userAvatarAlt: "some avatar",
      });

      stateCopy.newPostText = "";

      return stateCopy;
    }
    case "UPDATE-NEW-POST-TEXT": {
      let stateCopy = { ...state };

      stateCopy.postState = [...state.postState];
      stateCopy.profileInfoState = { ...state.profileInfoState };

      stateCopy.newPostText = action.newPostText;

      return stateCopy;
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

export const addPostActionCreator = () => ({ type: "ADD-POST" });

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
        console.log("The new state will be integrated for authenticated user");

        dispatch(setUserStatusAC(status));
      } else {
        console.log(
          "The new state will be integrated for unauthenticated user"
        );

        dispatch(setUserStatusAC(status));
      }
    })
    .catch((error) => {
      console.error(
        "A request error has been appeared, but the new state wiil be integrated"
      );

      dispatch(setUserStatusAC(status));
    });
};

export default profileReducer;
