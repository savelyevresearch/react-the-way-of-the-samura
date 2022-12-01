import React from "react";

import profileInfoStyleClasses from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <>
      <img
        src={props.backgroundImgUrl}
        alt={props.backgroundImgAlt}
      />
      <div className={profileInfoStyleClasses.descriptionBlock}>ava + description</div>
    </>
  );
};

export default ProfileInfo;
