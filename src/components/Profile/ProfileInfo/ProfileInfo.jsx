import React from "react";
import Preloader from "../../common/Preloader/Preloader";

import profileInfoStyleClasses from "./ProfileInfo.module.css";

import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = ({ profileInfo, status, getUserStatus, updateUserStatus }) => {
  if (!profileInfo) {
    return <Preloader />;
  }

  return (
    <>
      <img
        src="https://www.hdwallpapers.in/download/sunset_sky_reflections_4k_8k-HD.jpg"
        alt="some image"
        width={600}
        height={400}
      />
      <div className={profileInfoStyleClasses.descriptionBlock}>
        <img src={profileInfo.photos.large} />
        <br />
        {profileInfo.fullName}
        <br />
        {profileInfo.aboutMe}
        <br />
        <ProfileStatusWithHooks
          status={status}
          getUserStatus={getUserStatus}
          updateUserStatus={updateUserStatus}
        />
      </div>
    </>
  );
};

export default ProfileInfo;
