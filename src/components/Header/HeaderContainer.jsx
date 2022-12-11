import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthUserDataAC } from "../../redux/authReducer";

class HeaderRequestAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data;

          this.props.setAuthUserData(id, login, email);
        } else {
          this.props.setAuthUserData(
            27077,
            "savelyevresearch",
            "savelyevresearch@protonmail.com"
          );
        }
      });
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
  setAuthUserData: setAuthUserDataAC,
})(HeaderRequestAPIComponent);

export default HeaderContainer;
