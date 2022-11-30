import React from "react";

import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={classes.content}>
      <img
        src="https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg"
        alt="some image"
      />
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={classes.posts}>
          <div className={classes.item}>Post 1</div>
          <div className={classes.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
