import React from "react";

import dialogsStyleClasses from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={dialogsStyleClasses.messageInputField}>
        <Field
          component="textarea"
          name="message"
          placeholder="Enter a message"
        />
        <button>Send a message</button>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

const Dialogs = (props) => {
  const addNewMessage = (values) => {
    props.sendMessage(values.message);
  }

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
        <AddMessageReduxForm onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
