import { React, useEffect } from "react";
import $ from "jquery";

import TopBar from "../topbar/TopBar";
import ClientDetails from "./ClientDetails";

import "./clients.css";

const Clients = () => {
  useEffect(() => {
    $("#client-overlay-open").click(() => {
      $("body").css("overflow", "hidden");
      $("#main-overlay-container").fadeIn();
    });

    $("#client-overlay-close").click(() => {
      $("body").css("overflow", "scroll");
      $("#main-overlay-container").fadeOut(250);
    });
  }, []);

  return (
    <>
      {/*Overlay*/}
      <div className="overlay-container" id="main-overlay-container">
        <div className="add-client-overlay">
          <div className="client-overlay-top">
            <div className="add-client-header">Add Clients</div>
            <div id="client-overlay-close" className="overlay-close">
              X
            </div>
          </div>
          <div className="add-client-divider"></div>
          <div className="ci-container">
            <form>
              <h2 className="ci-form-per-header">Client Information</h2>
              <div className="ci-form-row">
                <div className="ci-form-element-container">
                  <label className="ci-form-label">Client Name</label>
                  <input
                    className="ci-form-element"
                    type="text"
                    placeholder="Client Name"
                    name="client-name"
                  />
                </div>
                <div className="ci-form-element-container">
                  <label className="ci-form-label">Email Address</label>
                  <input
                    className="ci-form-element"
                    type="email"
                    placeholder="Email Address"
                    name="client-email"
                  />
                </div>
                <div className="ci-form-element-container">
                  <label className="ci-form-label">Phone Number</label>
                  <input
                    className="ci-form-element"
                    type="number"
                    placeholder="Phone Number"
                    name="client-phone"
                  />
                </div>
              </div>
              <div className="ci-form-row">
                <button type="submit" className="add-client-submit-btn">
                  {/*Link backend then close form on submit using jquery*/}
                  Add Client
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/*Client Main Container*/}
      <div style={{ width: "100%" }}>
        <TopBar panel="Client Management" />

        {/*Client Search*/}

        <div className="client-main-search-container">
          <form>
            <div style={{ display: "flex" }}>
              <input
                className="client-search"
                placeholder="Search Clients"
                name="client-search"
              />
              <button type="submit" className="search-client-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
          <button id="client-overlay-open" className="add-client-btn">
            Add Client
          </button>
        </div>

        {/*Client Table*/}
        <div className="client-container-block">
          <div className="client-details-name">
            <div className="cl-det-font client-name">Client Name</div>
            <div className="cl-det-font client-email">Email Address</div>
            <div className="cl-det-font client-number">Phone Number</div>
            <div className="cl-det-font client-onboarded-date">Created On</div>
            <div className="cl-det-font client-wpno">WhatsApp Number</div>
            <div className="cl-det-font client-feedback">
              Follow-Up/Feedback
            </div>
          </div>
          <hr className="client-divider" />
          <div>
            <ClientDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
