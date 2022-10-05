import React from "react";

import TopBar from "../topbar/TopBar";

import "./quotation.css";

const Quotation = () => {
  return (
    <div style={{ width: "100%" }}>
      <TopBar panel="Quotation Management" />
      <div className="quotation-main-container">
        <button className="add-project-btn">Add Quotation</button>

        <div className="quotation-details-name">
          <div className="cl-det-font quotation-client-name">Client Name</div>
          <div className="cl-det-font quotation-email">Email Address</div>
          <div className="cl-det-font quotation-phoneno">Phone Number</div>
          <div className="cl-det-font quotation-created">Created On</div>
        </div>
        <hr className="project-divider" />
      </div>
    </div>
  );
};

export default Quotation;
