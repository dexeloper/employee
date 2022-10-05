import React from "react";

import "./clients.css";

const ClientDetails = (props) => {
  return (
    <div className="client-entered-details">
      <div className="cl-det-entered-font client-name">props.name</div>
      <div className="cl-det-entered-font client-email">props.email</div>
      <div className="cl-det-entered-font client-number">props.number</div>
      <div className="cl-det-entered-font client-onboarded-date">
        props.dateJoined
      </div>
      <div className="cl-det-entered-font client-wpno">props.wpno</div>
      <div className="cl-det-entered-font client-feedback">props.followup</div>
      <div className="client-icons">
        <i className="cl-icon fa-regular fa-pen-to-square"></i>
        <i className="cl-icon fa-regular fa-trash-can"></i>
      </div>
    </div>
  );
};

export default ClientDetails;
