import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { state, addPost } from "./redux/state.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

/* addPost("Wake the heck up, samurai..."); */

root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}/>
  </React.StrictMode>
);
