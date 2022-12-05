import React from "react";

import dialogItemStyleClasses from './DialogItem.module.css';

import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={dialogItemStyleClasses.dialog}>
      <NavLink
        className={props.isActive ? dialogItemStyleClasses.active : ""}
        to={`/dialogs/${props.userId}`}
      >
        {props.userFirstName}
      </NavLink>
    </div>
  );
};

export default DialogItem;
