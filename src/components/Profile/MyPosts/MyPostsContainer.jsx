import React from "react";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer.js";

import store from "../../../redux/reduxStore.js";

import StoreContext from "../../../StoreContext.js";

import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const updateNewPostText = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };

        return (
          <MyPosts
            updateNewPostText={updateNewPostText}
            addPost={addPost}
            posts={store.getState().profileState.postState}
            newPostText={store.getState().profileState.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
