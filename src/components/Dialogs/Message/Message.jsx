import React from "react";

import messageStyleClasses from "./Message.module.css";

const Message = (props) => {
  return <div className={messageStyleClasses.message}>{props.messageText}</div>;
};

export default Message;
