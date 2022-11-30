import React from "react";

import profileStyleClasses from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={profileStyleClasses.content}>
      <img
        src="https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg"
        alt="some image"
      />
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={profileStyleClasses.posts}>
          <div className={profileStyleClasses.item}>Post 1</div>
          <div className={profileStyleClasses.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
