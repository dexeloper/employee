import React from "react";

import FormInput from "./FormInput";

import "./form.css";

const Form = () => {
  return (
    <div className="form-container">
      <form onSubmit="">
        <div className="form-element-container">
          <label htmlFor="fname" className="form-label">
            "Full Name*"
          </label>
          <input
            required
            validate
            className="form-field"
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter your Full Name here"
          />
        </div>
        <div className="form-element-container">
          <label htmlFor="cname" className="form-label">
            "Company Name*"
          </label>
          <input
            required
            validate
            className="form-field"
            type="text"
            id="cname"
            name="cname"
            placeholder="Enter your Company Name here"
          />
        </div>
        <div className="form-element-container">
          <label htmlFor="gstno" className="form-label">
            "GST Number*"
          </label>
          <input
            required
            validate
            className="form-field"
            type="number"
            id="gstno"
            name="gstno"
            placeholder="Enter your GST Number here"
          />
        </div>
        <div className="form-element-container">
          <label htmlFor="address" className="form-label">
            Address*
          </label>
          <input
            required
            validate
            className="form-field"
            type="text"
            id="address"
            name="address"
            placeholder="Enter your Address here"
          />
        </div>
        <div className="form-element-container">
          <label htmlFor="mobno" className="form-label">
            Mobile Number*
          </label>
          <input
            required
            validate
            className="form-field"
            type="number"
            id="mobno"
            name="mobno"
            placeholder="Enter your Mobile Number here"
          />
        </div>
        <div className="form-element-container">
          <label htmlFor="emailadd" className="form-label">
            Email Address*
          </label>
          <input
            required
            validate
            className="form-field"
            type="email"
            id="emailadd"
            name="emailadd"
            placeholder="Enter your Email here"
          />
        </div>
        <button className="form-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
