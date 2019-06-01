import {USER_SENT_MESSAGE} from 'actions/constants';

const initialState = {
  messages: []
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case USER_SENT_MESSAGE:
      return {...state, messages: [...state.messages, action.payload]};
    default:
      return state;
  }
}

export default chat;