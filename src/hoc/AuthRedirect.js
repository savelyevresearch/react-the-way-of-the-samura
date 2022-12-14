import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.authState.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class AuthRedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Navigate to="/login" />;

      return <Component {...this.props} />;
    }
  }

  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
    AuthRedirectComponent
  );

  return ConnectedAuthRedirectComponent;
};

export default withAuthRedirect;
