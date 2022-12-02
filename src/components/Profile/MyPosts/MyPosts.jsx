import React from "react";

import myPostsStyleClasses from "./MyPosts.module.css";

import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { message: "Hi, how are you?", likeCount: 10 },
    { message: "It's my first post", likeCount: 5 },
  ];
    
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
        {postsData.map((post, index) => (
          <Post key={index} message={post.message} likeCount={post.likeCount}/>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
