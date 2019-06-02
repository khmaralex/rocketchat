import {
  USER_SENT_MESSAGE,
  CLIENT_SENT_MESSAGE,
  RESET_CHAT_MESSAGES
} from "actions/constants";

const initialState = {
  messages: []
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case USER_SENT_MESSAGE:
    case CLIENT_SENT_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };

    case RESET_CHAT_MESSAGES:
      return { ...state, messages: [] };

    default:
      return state;
  }
};

export default chat;
