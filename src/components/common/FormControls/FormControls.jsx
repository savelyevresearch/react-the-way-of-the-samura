import React from "react";

import formControlsStyleClasses from "./FormControls.module.css";

const FormControl = ({ input, children, meta, element, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div>
      <div className={`${formControlsStyleClasses.formControl} ${
            hasError && formControlsStyleClasses.formControlError
          }`}>
        {children}
      </div>
      <div className={`${formControlsStyleClasses.errorMessage}`}>
        {hasError && (
          <span>
            {meta.error}
          </span>
        )}
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
