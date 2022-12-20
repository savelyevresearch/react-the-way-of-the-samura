import React from "react";

import { connect } from "react-redux";

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer.js";

import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profileState.postState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
