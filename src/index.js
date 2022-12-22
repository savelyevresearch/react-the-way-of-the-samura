import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import store from "./redux/reduxStore.js";

import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* setInterval(() => {
  store.dispatch({ type: "FAKE" });
}, 1000);
 */
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
