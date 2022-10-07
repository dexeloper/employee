import React from "react";

import FormInput from "./FormInput";

import "./form.css";

const Form = () => {
  return (
    <div className="form-container">
      <form onSubmit="">
        <FormInput
          label="Full Name*"
          inputType="text"
          inputName="fname"
          inputPlaceholder="Enter your Full Name here"
        />
        <FormInput
          label="Company Name*"
          inputType="text"
          inputName="cname"
          inputPlaceholder="Enter your Company Name here"
        />
        <FormInput
          label="GST Number*"
          inputType="number"
          inputName="gstno"
          inputPlaceholder="Enter your GST Number here"
        />
        <FormInput
          label="Address*"
          inputType="text"
          inputName="address"
          inputPlaceholder="Enter your Address here"
        />
        <FormInput
          label="Mobile Number*"
          inputType="number"
          inputName="mobno"
          inputPlaceholder="Enter your Mobile Number here"
        />
        <FormInput
          label="Email Address*"
          inputType="email"
          inputName="emailadd"
          inputPlaceholder="Enter your Email here"
        />
        <button className="form-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
