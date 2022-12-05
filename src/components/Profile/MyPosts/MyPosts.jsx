import React from "react";

import myPostsStyleClasses from "./MyPosts.module.css";

import Post from "./Post/Post";

import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state.js";

const MyPosts = (props) => {
  const newPostElement = React.createRef();

  const addPostHandler = () => {    
    props.dispatch(addPostActionCreator());
  };

  const onPostChangeHandler = () => {
    const text = newPostElement.current.value;

    props.dispatch(updateNewPostTextActionCreator());
  };

  return (
    <div className={myPostsStyleClasses.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChangeHandler}
            ref={newPostElement}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPostHandler}>Add post</button>
        </div>
      </div>
      <div className={myPostsStyleClasses.posts}>
        {props.state.map((post, index) => (
          <Post
            key={index}
            userAvatarUrl={post.userAvatarUrl}
            userAvatarAlt={post.userAvatarAlt}
            message={post.message}
            likeCount={post.likeCount}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
