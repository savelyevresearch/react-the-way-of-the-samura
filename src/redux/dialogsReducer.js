const dialogsReducer = (state, action) => {
  switch (action.type) {
    case "SEND-MESSAGE":
      state.messageState.push({
        messageText: state.messageInputField,
      });

      state.messageInputField = "";

      break;
    case "UPDATE-SENDING-MESSAGE":
      state.messageInputField = action.messageText;

      break;
    default:
        return state;
  }

  return state;
};

export const sendMessageActionCreator = () => ({ type: "SEND-MESSAGE" });

export const updateSendingMessageActionCreator = (text) => ({
  type: "UPDATE-SENDING-MESSAGE",
  messageText: text,
});

export default dialogsReducer;
