import React from "react";

import profileStyleClasses from "./Profile.module.css";

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import StoreContext from "../../StoreContext";

const Profile = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        return (
          <div className={profileStyleClasses.profileContent}>
            <ProfileInfo
              backgroundImgUrl={
                store.getState().profileState.profileInfoState[0]
                  .backgroundImgUrl
              }
              backgoroundImgAlt={
                store.getState().profileState.profileInfoState[0]
                  .backgroundImgAlt
              }
            />
            <MyPostsContainer />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Profile;
