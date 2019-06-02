import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";
import middlewares from "../middlewares";
import { loadState, saveState } from "./localStorage";

const throttle = (func, ms) => {
  let isThrottled = false;
  let savedArgs;

  function wrapper(...args) {
    if (isThrottled) {
      savedArgs = args;
      return;
    }

    func.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(this, savedArgs);
        savedArgs = null;
      }
    }, ms);
  }

  return wrapper;
};

const configureStore = () => {
  const persistedState = loadState();
  const THROTTLE_DELAY = 2000;

  const throttledSubscribeCb = throttle(() => {
    saveState({
      chat: store.getState().chat
    });
  }, THROTTLE_DELAY);

  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  store.subscribe(throttledSubscribeCb);
  return store;
};

export default configureStore;
