import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Users from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/profile" element={<ProfileContainer />} />
            <Route exact path="/dialogs" element={<DialogsContainer />} />
            <Route exact path="/users" element={<UsersContainer />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path="/music" element={<Music />} />
            <Route exact path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
