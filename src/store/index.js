import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import middlewares from '../middlewares';

const configureStore = () => {
  return createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));
};

export default configureStore;