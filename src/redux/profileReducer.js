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
    case "ADD-POST":
      state.postState.push({
        message: state.newPostText,
        likeCount: 0,
        userAvatarUrl:
          "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
        userAvatarAlt: "some avatar",
      });

      state.newPostText = "";

      break;
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.newPostText;

      break;
    default:
      return state;
  }

  return state;
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });

export const updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newPostText: text,
});

export default profileReducer;
