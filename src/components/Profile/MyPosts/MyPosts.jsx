import React from "react";

import myPostsStyleClasses from './MyPosts.module.css';

import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={myPostsStyleClasses.posts}>
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
