import React from "react";

import TopBar from "../topbar/TopBar";
import ClientDetails from "./ClientDetails";

import "./clients.css";

const Clients = () => {
  return (
    <div style={{ width: "100%" }}>
      <TopBar panel="Client Management" />
      <div className="client-main-search-container">
        <div style={{ display: "flex" }}>
          <input
            className="client-search"
            placeholder="Search Clients"
            name="c-search"
          />
          <button className="search-client-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <button className="add-client-btn">Add Client</button>
      </div>
      <div className="client-container-block">
        <div className="client-details-name">
          <div className="cl-det-font client-name">Client Name</div>
          <div className="cl-det-font client-email">Email Address</div>
          <div className="cl-det-font client-number">Phone Number</div>
          <div className="cl-det-font client-onboarded-date">Created On</div>
          <div className="cl-det-font client-wpno">WhatsApp Number</div>
          <div className="cl-det-font client-feedback">Follow-Up/Feedback</div>
        </div>
        <hr className="client-divider" />
        <div>
          <ClientDetails />
        </div>
      </div>
    </div>
  );
};

export default Clients;
