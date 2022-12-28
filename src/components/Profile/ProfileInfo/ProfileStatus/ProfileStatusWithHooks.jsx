import React from "react";
import { useState, useEffect } from "react";

import profileStatusStyleClasses from "./ProfileStatus.module.css";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);

    props.updateUserStatus(status);
  };

  const onStatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      {!editMode ? (
        <div>
        <b>Status: </b>
          <span onDoubleClick={activateEditMode}>
            {props.status || "Set a new status"}
          </span>
        </div>
      ) : (
        <div>
          <input
            autoFocus
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
          />
        </div>
      )}
    </>
  );
};

export default ProfileStatusWithHooks;
