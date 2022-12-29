import React from "react";

import { BrowserRouter, Navigate , Route, Routes } from "react-router-dom";

import "./App.css";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import { connect } from "react-redux";
import { initializeAppThunkCreator } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { compose } from "redux";
import withSuspensePreloader from "./hoc/withSuspensePreloader";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
  catchAllUnhandledErrors(promiseRejectionEvent) {
    console.error(`
      Some error is occured:
        - Reason: ${promiseRejectionEvent.reason}
        - Rejected promise: ${promiseRejectionEvent.promise}
    `);
  }

  componentDidMount() {
    this.props.initializeApp();

    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
              <Route path="/" element={<Navigate to={`/profile/${this.props.authorizedUserId}`} />} />
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/login/facebook"
                element={<div>Facebook</div>}
              />
              <Route path="/login" element={<LoginContainer />} />
              <Route path="*" element={<div>404</div>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appState.initialized,
  authorizedUserId: state.authState.userId,
});

export default compose(
  connect(mapStateToProps, {
    initializeApp: initializeAppThunkCreator,
  }),
  withSuspensePreloader
)(App);
