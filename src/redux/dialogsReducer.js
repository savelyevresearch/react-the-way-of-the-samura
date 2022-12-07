const dialogsState = {
  dialogItemState: [
    { userId: 1, userFirstName: "Vadim", isActive: true },
    { userId: 2, userFirstName: "John", isActive: false },
    { userId: 3, userFirtName: "Stanis", isActive: false },
    { userId: 4, userFirstName: "Eddard", isActive: false },
  ],
  messageState: [
    { messageText: "Hi" },
    { messageText: "Hello, how are you?" },
    { messageText: "Wassup.." },
    { messageText: "I think that you're right in this case." },
  ],
  messageInputField: "Type a message...",
};

const dialogsReducer = (state = dialogsState, action) => {
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
