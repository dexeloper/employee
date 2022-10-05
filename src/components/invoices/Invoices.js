import React from "react";

import TopBar from "../topbar/TopBar";

import "./invoices.css";

const Invoices = () => {
  return (
    <div style={{ width: "100%" }}>
      <TopBar panel="Invoices Management" />
      <div className="invoices-main-container">
        <button className="add-project-btn">Add Invoices</button>

        <div className="invoices-details-name">
          <div className="cl-det-font invoices-client-name">Client Name</div>
          <div className="cl-det-font invoices-email">Email Address</div>
          <div className="cl-det-font invoices-phoneno">Phone Number</div>
          <div className="cl-det-font invoices-created">Created On</div>
        </div>
        <hr className="project-divider" />
      </div>
    </div>
  );
};

export default Invoices;
