export const state = {
  profileState: {
    profileInfoState: [
      {
        backgroundImgUrl:
          "https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg",
        backgroundImgAlt: "some image",
      },
    ],
    postState: [
      {
        message: "Hi, how are you?",
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
  },
  dialogsState: {
    dialogItemState: [
      { userId: 1, userFirstName: "Vadim", isActive: true },
      { userId: 2, userFirstName: "John", isActive: false },
      { userId: 3, userFirtName: "Stanis", isActive: false },
      { userId: 4, userFirstName: "Eddard", isActive: false },
    ],
    messageState: [
      { messageText: "Hi" },
      { messageText: "Hello, how are you?" },
      { messageText: "Wassup.." },
      { messageText: "I think that you're right in this case." },
    ],
  },
};