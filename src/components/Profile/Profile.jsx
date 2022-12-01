import React from "react";

import profileStyleClasses from "./Profile.module.css";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={profileStyleClasses.profileContent}>
      <ProfileInfo
        backgroundImgUrl="https://1stwebdesigner.com/wp-content/uploads/2019/07/css-background-effects-thumb.jpg"
        backgoroundImgAlt="some image"
      />
      <MyPosts />
    </div>
  );
};

export default Profile;
