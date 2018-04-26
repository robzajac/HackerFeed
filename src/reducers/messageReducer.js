let initialState = {
  messages: [],
};

const createMessage = (messageType, message) => ({
  messageType: messageType,
  message: message,
});

const messageReducer = (state = initialState, action) => {
  if (action.error) {
    return {
      messages: [...state.messages, createMessage('error', action.error)],
    };
  }
  if (action.message) {
    return {
      messages: [...state.messages, createMessage('info', action.message)],
    };
  }
  if (action.type === 'DISMISS') {
    return {
      messages: [
        ...state.messages.splice(0, action.idx),
        ...state.messages.splice(action.idx + 1),
      ],
    };
  } else {
    return state;
  }
};

export default messageReducer;
