import React from "react";

import myPostsStyleClasses from "./MyPosts.module.css";

import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={myPostsStyleClasses.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={myPostsStyleClasses.posts}>
        <Post message="Hi, how are you?" likeCount={10} />
        <Post message="It's my first post" likeCount={5} />
      </div>
    </div>
  );
};

export default MyPosts;
