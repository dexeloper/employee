import { React, useEffect, useState } from "react";
import $ from "jquery";
import AlertBlock from "../../../alertBlock/AlertBlock";

import TopBar from "../../employeeDashboard/topbar/TopBar";
import ClientDetails from "./ClientDetails";

import "./clients.css";
const Clients = (props) => {
  const [clientsData, setClientsData] = useState([]);

  const [addClients, setAddClients] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [consoleErr, setConsoleErr] = useState();
  const showErrFunc = () => {
    setConsoleErr(null);
  };

  useEffect(() => {
    $("#client-overlay-open").click(() => {
      $("body").css("overflow", "hidden");
      $("#main-overlay-container").fadeIn();
    });

    $("#client-overlay-close").click(() => {
      $("body").css("overflow", "scroll");
      $("#main-overlay-container").fadeOut(250);
    });
    getData();
    console.log("useEffect of Client");
  }, []);

  const getData = async () => {
    let data = await fetch(`/bgetData/client`, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });
    data = await data.json();

    setClientsData(data.result);
  };

  function handleOnchange(event) {
    const { name, value } = event.target;

    setAddClients((preFormData) => ({
      ...preFormData,
      [name]: value,
    }));
  }

  async function handleFormData(event) {
    event.preventDefault();
    // formData.append(addClients);
    const result = await fetch(`/bclient`, {
      method: "post",
      body: JSON.stringify({ addClients }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // result = await result.json();
    if (result.err) {
      setConsoleErr(result.err);
    } else {
      console.log(`result==${result}`);
    }
  }

  return (
    <>
      {/*Overlay*/}
      {consoleErr && (
        <AlertBlock consoleErr={consoleErr} showErrFunc={showErrFunc} />
      )}
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
            <form onSubmit={handleFormData}>
              <h2 className="ci-form-per-header">Client Information</h2>
              <div className="ci-form-row">
                <div className="ci-form-element-container">
                  <label className="ci-form-label">Client Name</label>
                  <input
                    className="ci-form-element"
                    type="text"
                    placeholder="Client Name"
                    name="name"
                    style={{ width: "275px" }}
                    onChange={handleOnchange}
                  />
                </div>
                <div className="ci-form-element-container">
                  <label className="ci-form-label">Email Address</label>
                  <input
                    className="ci-form-element"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    style={{ width: "275px" }}
                    onChange={handleOnchange}
                  />
                </div>
                <div className="ci-form-element-container">
                  <label className="ci-form-label">Phone Number</label>
                  <input
                    className="ci-form-element"
                    type="number"
                    placeholder="Phone Number"
                    name="contact"
                    style={{ width: "275px" }}
                    onChange={handleOnchange}
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
          <form onSubmit={handleFormData}>
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
            {clientsData.map((data) => {
              return (
                <ClientDetails
                  key={data._id}
                  id={data._id}
                  name={data.name}
                  email={data.email}
                  contact={data.contact}
                  date={data.date}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
