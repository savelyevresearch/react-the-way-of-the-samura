import React from "react";
import { connect } from "react-redux";

import {
  sendMessageActionCreator,
  updateSendingMessageActionCreator,
} from "../../redux/dialogsReducer.js";

import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/AuthRedirect.js";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogItems: state.dialogsState.dialogItemState,
    messages: state.dialogsState.messageState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => {
      dispatch(sendMessageActionCreator(message));
    }
  };
};

const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);

export default DialogsContainer;
