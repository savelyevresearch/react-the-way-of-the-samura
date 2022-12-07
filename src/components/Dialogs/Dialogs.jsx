import React from "react";

import dialogsStyleClasses from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const messageInputField = React.createRef();

  const onMessageInputFieldChangeHandler = () => {
    const text = messageInputField.current.value;

    props.updateSendingMessage(text);
  };

  const sendMessageHandler = () => {
    props.sendMessage();
  };

  return (
    <div className={dialogsStyleClasses.dialogs}>
      <div className={dialogsStyleClasses.dialogItems}>
        {props.dialogItems.map((dialogItem, index) => (
          <DialogItem
            key={index}
            userId={dialogItem.userId}
            userFirstName={dialogItem.userFirstName}
            isActive={dialogItem.isActive}
          />
        ))}
      </div>
      <div className={dialogsStyleClasses.messages}>
        {props.messages.map((message, index) => (
          <Message key={index} messageText={message.messageText} />
        ))}
        <div className={dialogsStyleClasses.messageInputField}>
          <textarea ref={messageInputField} value={props.messageInputField} onChange={onMessageInputFieldChangeHandler}></textarea>
          <button onClick={sendMessageHandler}>Send a message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
