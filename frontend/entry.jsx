import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import React from "react"

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<h1>its working</h1>, root);

});