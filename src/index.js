import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import store from "./redux/reduxStore.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch} />
    </React.StrictMode>
  );
};

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});

root.render(
  <React.StrictMode>
    <App state={store.getState()} dispatch={store.dispatch} />
  </React.StrictMode>
);
