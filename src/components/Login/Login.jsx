import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { Field, reduxForm } from "redux-form";
import withAuthRedirect from "../../hoc/AuthRedirect";
import { loginThunkCreator } from "../../redux/authReducer";
import {
  maxLengthCreator,
  requiredField,
} from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          placeholder="Login"
          component={Input}
          name="login"
          validate={[requiredField, maxLengthCreator(100)]}
        />
      </div>
      <div>
        <Field
          type="password"
          placeholder="Password"
          component={Input}
          name="password"
          validate={[requiredField, maxLengthCreator(2000)]}
        />
      </div>
      <div>
        <Field type="checkbox" component={"input"} name="rememberMe" /> remember
        me
      </div>
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
    console.log(login, password, rememberMe);
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
