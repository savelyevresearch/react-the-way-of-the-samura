import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";

import profileInfoStyleClasses from "./ProfileInfo.module.css";

import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import userPhoto from "../../../assets/imgs/userAvatar.png";

const ProfileInfo = ({
  profileInfo,
  status,
  getUserStatus,
  updateUserStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  const onAvatarPhotoSelected = (event) => {
    const inputFiles = event.target.files;

    if (inputFiles.length) {
      savePhoto(inputFiles[0]);
    }
  };

  if (!profileInfo) {
    return <Preloader />;
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

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
        {editMode ? (
          <ProfileDataForm
            initialValues={profileInfo}
            profileInfo={profileInfo}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            profileInfo={profileInfo}
            isOwner={isOwner}
            goToEditMode={() => {
              setEditMode(true);
            }}
          />
        )}
        <ProfileStatusWithHooks
          status={status}
          getUserStatus={getUserStatus}
          updateUserStatus={updateUserStatus}
        />
      </div>
    </>
  );
};

function ProfileData({ profileInfo, isOwner, goToEditMode }) {
  return (
    <div>
      <div>{isOwner && <button onClick={goToEditMode}>Edit</button>}</div>
      <div>
        <b>Full name</b>: {profileInfo.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profileInfo.lookingForAJob ? "yes" : "no"}
      </div>
      {profileInfo.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profileInfo.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>:{" "}
        {profileInfo.aboutMe || "Enter a description about yourself"}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profileInfo.contacts).map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profileInfo.contacts[key]}
          />
        ))}
      </div>
    </div>
  );
}

function Contact({ contactTitle, contactValue }) {
  return (
    <div className={profileInfoStyleClasses.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
}

export default ProfileInfo;
