import React from "react";
import { NavLink } from "react-router-dom";

import dialogsStyleClasses from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={`${dialogsStyleClasses.dialog}`}>
      <NavLink
        className={`${props.isActive ? dialogsStyleClasses.active : ""}`}
        to={`/dialogs/${props.userId}`}
      >
        {props.userFirstName}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={dialogsStyleClasses.message}>{props.messageText}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={dialogsStyleClasses.dialogs}>
      <div className={dialogsStyleClasses.dialogItems}>
        <DialogItem isActive={true} userId={1} userFirstName="Vadim" />
        <DialogItem userId={2} userFirstName="John" />
        <DialogItem userId={3} userFirstName="Stanis" />
        <DialogItem userId={4} userFirstName="Eddard" />
      </div>
      <div className={dialogsStyleClasses.messages}>
        <Message messageText="Hi" />
        <Message messageText="Hello, how are you?" />
        <Message messageText="Wassup..." />
        <Message messageText="I think that you're right in this case." />
      </div>
    </div>
  );
};

export default Dialogs;
