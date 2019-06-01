import {GET_INITIAL_DATA_PENDING, GET_INITIAL_DATA_SUCCESS } from 'actions/constants';

let initialState = {
  isDataLoading: false,
  accounts: {},
  deposits: {},
  messages: {}
};

const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_DATA_PENDING:
      return {...state, isDataLoading: true};

    case GET_INITIAL_DATA_SUCCESS:
      return {...state, isDataLoading: false, ...action.payload};

    default:
      return state;
  }
};

export default userDataReducer;