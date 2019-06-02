import chat from "./chat";
import userData from "./userData";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ userData, chat });

export default rootReducer;
