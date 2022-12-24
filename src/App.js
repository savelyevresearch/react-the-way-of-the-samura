import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeAppThunkCreator } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <HeaderContainer />
          <NavbarContainer />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<LoginContainer />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appState.initialized,
});

export default connect(mapStateToProps, {
  initializeApp: initializeAppThunkCreator,
})(App);
