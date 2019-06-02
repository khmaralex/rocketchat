import thunk from 'redux-thunk';
import clientBotMiddleware from './clientBotMiddleware';

const middlewares = [thunk, clientBotMiddleware];
export default middlewares;



