import React, { createElement } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import { loginThunkCreator } from "../../redux/authReducer";
import {
  maxLengthCreator,
  requiredField,
} from "../../utils/validators/validators";
import { Input, createField } from "../common/FormControls/FormControls";
import formControlsStyleClasses from "../common/FormControls/FormControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField(
        "Login",
        "login",
        [requiredField, maxLengthCreator(100)],
        Input,
        "text"
      )}
      {createField(
        "Enter a password...",
        "password",
        [requiredField, maxLengthCreator(2000)],
        Input,
        "password"
      )}
      {createField(
        null,
        "rememberMe",
        null,
        "input",
        "checkbox",
        "Remember me"
      )}
      {error && (
        <div className={`${formControlsStyleClasses.summaryError}`}>
          <span>{error}</span>
        </div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = ({ login, password, rememberMe }) => {
    props.login(login, password, rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={`/profile/${props.userId}`} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.authState.userId,
  isAuth: state.authState.isAuth,
});

const LoginContainer = compose(
  connect(mapStateToProps, {
    login: loginThunkCreator,
  })
)(Login);

export default LoginContainer;
