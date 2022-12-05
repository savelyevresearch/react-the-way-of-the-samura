import React from "react";

import dialogsStyleClasses from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import { sendMessageActionCreator, updateSendingMessageActionCreator } from "../../redux/state.js";

const Dialogs = (props) => {
  const messageInputField = React.createRef();

  const onMessageInputFieldChangeHandler = () => {
    const text = messageInputField.current.value;

    props.dispatch(updateSendingMessageActionCreator(text));
  };

  const sendMessageHandler = () => {
    props.dispatch(sendMessageActionCreator());
  };

  return (
    <div className={dialogsStyleClasses.dialogs}>
      <div className={dialogsStyleClasses.dialogItems}>
        {props.state.dialogItemState.map((dialogItem, index) => (
          <DialogItem
            key={index}
            userId={dialogItem.userId}
            userFirstName={dialogItem.userFirstName}
            isActive={dialogItem.isActive}
          />
        ))}
      </div>
      <div className={dialogsStyleClasses.messages}>
        {props.state.messageState.map((message, index) => (
          <Message key={index} messageText={message.messageText} />
        ))}
        <div className={dialogsStyleClasses.messageInputField}>
          <textarea ref={messageInputField} value={props.state.messageInputField} onChange={onMessageInputFieldChangeHandler}></textarea>
          <button onClick={sendMessageHandler}>Send a message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
