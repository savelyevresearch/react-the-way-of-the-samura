import React from "react";

import profileStyleClasses from "./Profile.module.css";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={profileStyleClasses.profileContent}>
      <ProfileInfo
        backgroundImgUrl={props.profileInfo.backgroundImgUrl}
        backgoroundImgAlt={props.profileInfo.backgroundImgAlt}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
