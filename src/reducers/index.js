import { combineReducers } from 'redux';
import userData from './userDataReducer';
import chatReducer from './chatReducer';

const rootReducer = combineReducers({ userData, chatReducer });

export default rootReducer;