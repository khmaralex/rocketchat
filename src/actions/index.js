import API from "API";

import {
  USER_SENT_MESSAGE,
  CLIENT_SENT_MESSAGE,
  RESET_CHAT_MESSAGES,
  GET_INITIAL_DATA_PENDING,
  GET_INITIAL_DATA_SUCCESS,
  GET_INITIAL_DATA_FAILURE
} from "./constants";

export const getInitialDataPending = () => ({type: GET_INITIAL_DATA_PENDING});
export const getInitialDataFailure = () => ({type: GET_INITIAL_DATA_FAILURE});
export const getInitialDataSuccess = data => ({type: GET_INITIAL_DATA_SUCCESS, payload: data});

export function getInitialData() {
  return dispatch => {
    dispatch(getInitialDataPending());

    API.getData()
      .then(data => {
        dispatch(getInitialDataSuccess(data));
      })
      .catch(error => {
        dispatch(getInitialDataFailure(error));
      })
  };
}

export const resetChatMessages = () => ({type: RESET_CHAT_MESSAGES});
export const userSentMessage = message => ({type: USER_SENT_MESSAGE, payload: message});
export const clientSentMessage = message => ({type: CLIENT_SENT_MESSAGE, payload: message});
