import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { authMeThunkCreator } from "../../redux/authReducer";

class HeaderRequestAPIComponent extends React.Component {
  componentDidMount() {
    this.props.authMe();
  }

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
  authMe: authMeThunkCreator,
})(HeaderRequestAPIComponent);

export default HeaderContainer;
