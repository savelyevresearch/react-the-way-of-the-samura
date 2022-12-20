import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";
import { Input } from "../common/FormControls/FormControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field type="text" placeholder="Login" component={Input} name="login" validate={[requiredField, maxLengthCreator(20)]} />
      </div>
      <div>
        <Field type="password" placeholder="Password" component={Input} name="password" validate={[requiredField, maxLengthCreator(2000)]} />
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
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
