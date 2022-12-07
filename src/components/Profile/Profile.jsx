import React from "react";

import profileStyleClasses from "./Profile.module.css";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={profileStyleClasses.profileContent}>
      <ProfileInfo
        backgroundImgUrl={props.state.profileInfoState[0].backgroundImgUrl}
        backgoroundImgAlt={props.state.profileInfoState[0].backgroundImgAlt}
      />
      <MyPostsContainer posts={props.state.postState} dispatch={props.dispatch} newPostText={props.state.newPostText} />
    </div>
  );
};

export default Profile;
