import React from "react";
import { ErrorMessage, useField } from "formik";

export const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <select
        className={`form-control shadow-none  ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
