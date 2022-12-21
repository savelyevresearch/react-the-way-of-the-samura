import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { logoutThunkCreator } from "../../redux/authReducer";

class HeaderRequestAPIComponent extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.authState.userId,
    email: state.authState.email,
    login: state.authState.login,
    isAuth: state.authState.isAuth,
  };
};

const HeaderContainer = connect(mapStateToProps, {
  logout: logoutThunkCreator,
})(HeaderRequestAPIComponent);

export default HeaderContainer;
