import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { state, addPost, updateNewPostText, subscribe } from "./redux/state.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>
  );
};

subscribe(rerenderEntireTree);

root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
  </React.StrictMode>
);
