import React from "react";

import friendItemStyleClasses from "./FriendItem.module.css";

const FriendItem = (props) => {
  return (
    <div className={friendItemStyleClasses.friendItem}>
      <img className={friendItemStyleClasses.friendAvatarImg} src={props.friendAvatarUrl} alt={props.friendAvatarAlt} />
      <p className={friendItemStyleClasses.friendFirstName}>{props.friendFirstName}</p>
    </div>
  );
};

export default FriendItem;
