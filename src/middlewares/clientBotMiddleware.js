import { USER_SENT_MESSAGE } from "actions/constants";
import { clientSentMessage } from "actions";
import ClientBot from "./ClientBot.js";

const bot = new ClientBot("Сергей");

const clientBotMiddleware = ({ dispatch }) => {
  return next => action => {
    const returnValue = next(action);

    if (action.type === USER_SENT_MESSAGE) {
      bot
        .replyToMessage(action.payload)
        .then(answer => dispatch(clientSentMessage(answer)));
    }

    return returnValue;
  };
};

export default clientBotMiddleware;
