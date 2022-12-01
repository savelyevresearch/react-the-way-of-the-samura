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
  let dialogsData = [
    { userId: 1, userFirstName: 'Vadim', isActive: true },
    { userId: 2, userFirstName: 'John', isActive: false },
    { userId: 3, userFirtName: 'Stanis', isActive: false },
    { userId: 4, userFirstName: 'Eddard', isActive: false },
  ];

  let messagesData = [
    { messageText: 'Hi' },
    { messageText: 'Hello, how are you?' },
    { messageText: 'Wassup..' },
    { messageText: 'I think that you\'re right in this case.' },
  ];

  return (
    <div className={dialogsStyleClasses.dialogs}>
      <div className={dialogsStyleClasses.dialogItems}>
        {dialogsData.map((dialogItem, index) => (
          <DialogItem userId={dialogItem.userId} userFirstName={dialogItem.userFirstName} isActive={dialogsData.isActive}/>
        ))}
      </div>
      <div className={dialogsStyleClasses.messages}>
          {messagesData.map((message, index) => (
            <Message messageText={message.messageText} />
          ))}
      </div>
    </div>
  );
};

export default Dialogs;
