import React from "react";

import {
  sendMessageActionCreator,
  updateSendingMessageActionCreator,
} from "../../redux/dialogsReducer.js";
import StoreContext from "../../StoreContext.js";

import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const updateSendingMessage = (text) => {
          store.dispatch(updateSendingMessageActionCreator(text));
        };

        const sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        };

        return (
          <Dialogs
            sendMessage={sendMessage}
            updateSendingMessage={updateSendingMessage}
            messageInputField={store.getState().dialogsState.messageInputField}
            messages={store.getState().dialogsState.messageState}
            dialogItems={store.getState().dialogsState.dialogItemState}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
