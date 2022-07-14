import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import React from "react"
import {getListings} from "./actions/listing_actions"

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  //testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.store = store;
  window.getListings = getListings;
  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<h1>its working</h1>, root);
});