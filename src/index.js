import React from "react";
import { render } from "react-dom";
import configureStore from "./store";
import { Provider } from "react-redux";
import AppContainer from "containers/AppContainer";
import "./index.css";

const store = configureStore();

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
