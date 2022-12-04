import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { addPost, updateNewPostText } from "./redux/state.js";

import { root } from "./index.js"

export const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>
  );
};