import { combineReducers } from 'redux';
import userData from './userData';
import chat from './chat';

const rootReducer = combineReducers({ userData, chat });

export default rootReducer;