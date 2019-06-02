import ClientBot from "./ClientBot.js";
import { USER_SENT_MESSAGE, GET_INITIAL_DATA_SUCCESS } from "actions/constants";

const bot = new ClientBot("Сергей");

const clientBotMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    next(action);
    const { chat } = getState();

    if (action.type === USER_SENT_MESSAGE) {
      bot.replyToMessage(action.payload, dispatch);
    }

    if (action.type === GET_INITIAL_DATA_SUCCESS) {
      if (chat.messages.length === 0) {
        bot.init(dispatch);
      }
    }
  };
};

export default clientBotMiddleware;
