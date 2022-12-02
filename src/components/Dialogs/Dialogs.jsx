import React from "react";
import { NavLink } from "react-router-dom";

import dialogsStyleClasses from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { state } from "../../index.js";

const Dialogs = (props) => {
  return (
    <div className={dialogsStyleClasses.dialogs}>
      <div className={dialogsStyleClasses.dialogItems}>
        {state.dialogItemState.map((dialogItem, index) => (
          <DialogItem key={index} userId={dialogItem.userId} userFirstName={dialogItem.userFirstName} isActive={dialogItem.isActive}/>
        ))}
      </div>
      <div className={dialogsStyleClasses.messages}>
          {state.messageState.map((message, index) => (
            <Message key={index} messageText={message.messageText} />
          ))}
      </div>
    </div>
  );
};

export default Dialogs;
