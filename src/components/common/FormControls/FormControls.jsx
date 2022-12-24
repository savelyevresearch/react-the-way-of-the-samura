import React from "react";

import formControlsStyleClasses from "./FormControls.module.css";

import { Field } from "redux-form";

const FormControl = ({ children, meta: { touched, error } }) => {
  const hasError = touched && error;

  return (
    <div>
      <div
        className={`${formControlsStyleClasses.formControl} ${
          hasError && formControlsStyleClasses.formControlError
        }`}
      >
        {children}
      </div>
      <div className={`${formControlsStyleClasses.errorMessage}`}>
        {hasError && <span>{error}</span>}
      </div>
    </div>
  );
};

export const TextArea = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (
  placeholder = "Default placeholder...",
  name = "defaultInputField",
  validators = null,
  component = "input",
  type = "text",
  text = "",
) => (
  <div>
    <Field
      type={type}
      placeholder={placeholder}
      component={component}
      name={name}
      validate={validators}
    /> {text}
  </div>
);
