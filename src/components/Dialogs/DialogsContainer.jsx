import React from "react";

import { sendMessageActionCreator, updateSendingMessageActionCreator } from "../../redux/dialogsReducer.js";

import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const updateSendingMessage = (text) => {
    props.dispatch(updateSendingMessageActionCreator(text));
  };

  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };

  return (
    <Dialogs sendMessage={sendMessage} updateSendingMessage={updateSendingMessage} messageInputField={props.dialogsState.messageInputField} messages={props.dialogsState.messageState} dialogItems={props.dialogsState.dialogItemState} />
  );
};

export default DialogsContainer;