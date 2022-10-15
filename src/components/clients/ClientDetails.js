import React from "react";

import "./clients.css";

const ClientDetails = (props) => {
  return (
    <>
      <div>
        {/*Map required here on parent div when data comes from backend*/}
        <div className="client-row-wrapper">
          <div className="client-entered-details">
            <div className="cl-det-entered-font client-name">props.name</div>
            <div className="cl-det-entered-font client-email">props.email</div>
            <div className="cl-det-entered-font client-number">
              props.number
            </div>
            <div className="cl-det-entered-font client-onboarded-date">
              props.dateJoined
            </div>
            <div className="cl-det-entered-font client-wpno">props.wpno</div>
            <div className="cl-det-entered-font client-feedback">
              props.followup
            </div>
          </div>
          <div className="client-icons">
            <i
              title="Edit/View Details"
              className="cl-icon fa-regular fa-pen-to-square"
            ></i>
            <i title="Delete" className="cl-icon fa-regular fa-trash-can"></i>
          </div>
        </div>
        <hr className="client-divider" />
      </div>
    </>
  );
};

export default ClientDetails;
