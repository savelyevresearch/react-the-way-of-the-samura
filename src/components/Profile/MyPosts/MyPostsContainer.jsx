import React from "react";

import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer.js";

import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const updateNewPostText = (text) => {
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts updateNewPostText={updateNewPostText} addPost={addPost} posts={props.posts} newPostText={props.newPostText} />
  );
};

export default MyPostsContainer;
