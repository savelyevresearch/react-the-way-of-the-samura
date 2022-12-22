import React from "react";
import Preloader from "../../common/Preloader/Preloader";

import profileInfoStyleClasses from "./ProfileInfo.module.css";

import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profileInfo) {
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
        <img src={props.profileInfo.photos.large} />
        <br />
        {props.profileInfo.fullName}
        <br />
        {props.profileInfo.aboutMe}
        <br />
        <ProfileStatusWithHooks
          status={props.status}
          getUserStatus={props.getUserStatus}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
    </>
  );
};

export default ProfileInfo;
