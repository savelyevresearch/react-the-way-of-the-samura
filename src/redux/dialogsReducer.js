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
};

const dialogsReducer = (state = dialogsState, action) => {
  switch (action.type) {
    case "SEND-MESSAGE": {
      return {
        ...state,
        messageState: [...state.messageState, { messageText: action.message }],
      }
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = (message) => ({
  type: "SEND-MESSAGE",
  message,
});

export default dialogsReducer;
