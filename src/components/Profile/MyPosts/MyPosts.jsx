import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";
import { TextArea } from "../../common/FormControls/FormControls";

import myPostsStyleClasses from "./MyPosts.module.css";

import Post from "./Post/Post";

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={TextArea} name="post" placeholder="Enter a new post" validate={[requiredField, maxLengthCreator(10)]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: "addPostForm",
})(AddPostForm);

const MyPosts = (props) => {
  const addPost = (values) => {
    props.addPost(values.post);
  };

  return (
    <div className={myPostsStyleClasses.postsBlock}>
      <h3>My Posts</h3>
      <AddPostReduxForm onSubmit={addPost} />
      <div className={myPostsStyleClasses.posts}>
        {props.posts.map((post) => (
          <Post
            key={post.id}
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
