import React from "react";
import Preloader from "../../common/Preloader/Preloader";

import profileInfoStyleClasses from "./ProfileInfo.module.css";

import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/imgs/userAvatar.png";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const ProfileInfo = ({
  profileInfo,
  status,
  getUserStatus,
  updateUserStatus,
  isOwner,
  savePhoto,
}) => {
  const onAvatarPhotoSelected = (event) => {
    const inputFiles = event.target.files;

    if (inputFiles.length) {
      savePhoto(inputFiles[0]);
    }
  };

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
        <img
          width="150"
          height="150"
          src={profileInfo.photos.large || userPhoto}
        />
        {isOwner && <input type="file" onChange={onAvatarPhotoSelected} />}
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
