import { combineReducers } from 'redux';
import accounts from './accounts';
import deposits from './deposits';

const rootReducer = combineReducers({ accounts, deposits });

export default rootReducer;