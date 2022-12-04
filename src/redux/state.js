const store = {
  _state: {
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
      /* messagesText: [
        "Type a message",
        "Type a message",
        "Type a message",
        "Type a message",
      ], */
    },
    navbarState: {
      friendsBlockState: [
        {
          friendAvatarUrl:
            "https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
          friendAvatarAl: "some avatar",
          friendFirstName: "Elizabeth",
        },
        {
          friendAvatarUrl:
            "https://cdn0.iconfinder.com/data/icons/unigrid-flat-human-vol-2/90/011_101_anonymous_anonym_hacker_vendetta_user_human_avatar-1024.png",
          friendAvatarAl: "some avatar",
          friendFirstName: "Gerbert",
        },
        {
          friendAvatarUrl:
            "https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png",
          friendAvatarAl: "some avatar",
          friendFirstName: "Karl",
        },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() { console.log('State is changed') },
  addPost() {
    this._state.profileState.postState.push({
      message: this._state.profileState.newPostText,
      likeCount: 0,
      userAvatarUrl:
        "https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png",
      userAvatarAlt: "some avatar",
    });
  
    this._state.profileState.newPostText = "";
  
    this._callSubscriber(this._state);
  },
  updateNewPostText(newPostText) {
    this._state.profileState.newPostText = newPostText;
  
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;