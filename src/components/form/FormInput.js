import React from "react";

import "./form.css";

const FormInput = (props) => {
  return (
    <div className="form-element-container">
      <label htmlFor={props.inputName} className="form-label">
        {props.label}
      </label>
      <input
        required
        validate
        className="form-field"
        type={props.inputType}
        id={props.inputName}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
      />
    </div>
  );
};

export default FormInput;
