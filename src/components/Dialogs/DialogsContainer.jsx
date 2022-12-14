import React from "react";
import { connect } from "react-redux";

import {
  sendMessageActionCreator,
  updateSendingMessageActionCreator,
} from "../../redux/dialogsReducer.js";

import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogItems: state.dialogsState.dialogItemState,
    messages: state.dialogsState.messageState,
    messageInputField: state.dialogsState.messageInputField,
    isAuth: state.authState.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    updateSendingMessage: (text) => {
      dispatch(updateSendingMessageActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
