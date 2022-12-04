import React from "react";

import messageStyleClasses from "./Message.module.css";

const Message = (props) => {
  const messageField = React.createRef();

  const messageReplyHandler = () => {
    const fieldText = messageField.current.value;

    alert(fieldText);
  };

  return (
    <div className={messageStyleClasses.message}>
      <div className={messageStyleClasses.lastMessage}>{props.messageText}</div>
      <textarea ref={messageField} value={props.inputFieldValue}></textarea>
      <button onClick={messageReplyHandler}>Type a message</button>
    </div>
  );
}

export default Message;
