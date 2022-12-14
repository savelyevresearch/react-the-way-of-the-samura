import React from "react";
import { connect } from "react-redux";

import {
  sendMessageActionCreator,
  updateSendingMessageActionCreator,
} from "../../redux/dialogsReducer.js";

import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/AuthRedirect.js";

const mapStateToProps = (state) => {
  return {
    dialogItems: state.dialogsState.dialogItemState,
    messages: state.dialogsState.messageState,
    messageInputField: state.dialogsState.messageInputField,
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

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
