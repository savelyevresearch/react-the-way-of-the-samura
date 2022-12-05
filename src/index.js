import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import store from "./redux/state.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
};

store.subscribe(rerenderEntireTree);

root.render(
  <React.StrictMode>
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
  </React.StrictMode>
);
