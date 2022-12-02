import React from "react";

import profileStyleClasses from "./Profile.module.css";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import { state } from "../../index.js";

const Profile = () => {
  return (
    <div className={profileStyleClasses.profileContent}>
      <ProfileInfo
        backgroundImgUrl={state.profileInfoState[0].backgroundImgUrl}
        backgoroundImgAlt={state.profileInfoState[0].backgroundImgAlt}
      />
      <MyPosts />
    </div>
  );
};

export default Profile;
