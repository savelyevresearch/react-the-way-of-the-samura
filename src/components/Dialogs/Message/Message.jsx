import React from "react";

import messageStyleClasses from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={messageStyleClasses.messageItem}>
      <p className={messageStyleClasses.messageText}>{props.messageText}</p>
    </div>
  );
};

export default Message;
