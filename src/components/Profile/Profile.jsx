import React from "react";

import profileStyleClasses from "./Profile.module.css";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={profileStyleClasses.profileContent}>
      <ProfileInfo
        profileInfo={props.profileInfo}
        status={props.status}
        getUserStatus={props.getUserStatus}
        updateUserStatus={props.updateUserStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
