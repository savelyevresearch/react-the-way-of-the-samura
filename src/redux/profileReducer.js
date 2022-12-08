const profileState = {
  profileInfoState: {
    backgroundImgUrl:
      "https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg",
    backgroundImgAlt: "some image",
  },
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
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });

export const updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newPostText: text,
});

export default profileReducer;
