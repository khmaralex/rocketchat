import { USER_SENT_MESSAGE } from "actions/constants";
import ClientBot from "./ClientBot.js";

const bot = new ClientBot("Сергей");

const clientBotMiddleware = ({ dispatch , getState}) => {
  return next => action => {
    const returnValue = next(action);
    const {chat} = getState();

    if (action.type === USER_SENT_MESSAGE) {
      bot.replyToMessage(action.payload, dispatch);
    }

    if(chat.messages.length === 0){
      bot.sayHi(dispatch);
    }
  };
};

export default clientBotMiddleware;
