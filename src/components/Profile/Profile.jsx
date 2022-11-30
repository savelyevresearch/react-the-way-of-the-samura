import React from "react";

import profileStyleClasses from "./Profile.module.css";

import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={profileStyleClasses.content}>
      <img
        src="https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg"
        alt="some image"
      />
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
