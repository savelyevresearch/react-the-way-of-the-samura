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
    case "SEND-MESSAGE": {
      let stateCopy = { ...state };

      stateCopy.dialogItemState = [...state.dialogItemState];
      stateCopy.messageState = [...state.messageState];

      stateCopy.messageState.push({
        messageText: state.messageInputField,
      });

      stateCopy.messageInputField = "";

      return stateCopy;
    }
    case "UPDATE-SENDING-MESSAGE": {
      let stateCopy = { ...state };

      stateCopy.dialogItemState = [...state.dialogItemState];
      stateCopy.messageState = [...state.messageState];

      stateCopy.messageInputField = action.messageText;

      return stateCopy;
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: "SEND-MESSAGE" });

export const updateSendingMessageActionCreator = (text) => ({
  type: "UPDATE-SENDING-MESSAGE",
  messageText: text,
});

export default dialogsReducer;
