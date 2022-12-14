import { React, useEffect } from "react";
import $ from "jquery";

import TopBar from "../../employeeDashboard/topbar/TopBar";
import InvoiceRow from "./InvoiceRow";

import "./invoices.css";

const Invoices = () => {
  const [invoicesData, setInvoicesData] = useState([]);
  const [addInvoices, setAddInvoices] = useState({
    currency: "",
    companyDetail: "",
    customerName: "",
    customerId: "",
    details: "",
    billTo: "",
    shipTo: "",
    dateOfInvoices: "",
    termsConditions: "",
    bankDetail: "",
    items: [
      {
        itemName: "",
        itemCode: "",
        quantity: "",
        unit: "",
        price: "",
        amount: "",
      },
    ],
  });

  const [consoleErr, setConsoleErr] = useState();
  const showErrFunc = () => {
    setConsoleErr(null);
  };

  useEffect(() => {
    $("#add-invoices").click(() => {
      $("body").css("overflow", "hidden");
      $("#main-overlay-container").fadeIn();
    });

    $("#invoices-overlay-close").click(() => {
      $("body").css("overflow", "scroll");
      $("#main-overlay-container").fadeOut(250);
    });

    $("#reset-btn").click(() => {
      $("body").css("overflow", "scroll");
      $("#main-overlay-container").scrollTop(0);
      $("#main-overlay-container").fadeOut(250);
    });

    $("#addrows").click(function () {
      $("#maintable tr:last").after(
        "<tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>"
      );
      $("#addrows").stopImmediatePropagation();
    });

    getData();
  }, []);

  const getData = async () => {
    let data = await fetch(``, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });
    data = await data.json();

    setInvoicesData(data.result);
  };

  function handleOnchange(event) {
    const { name, value } = event.target;

    setAddInvoices((preFormData) => ({
      ...preFormData,
      [name]: value,
    }));
  }

  async function handleFormData(event) {
    event.preventDefault();
    // formData.append(addClients);
    const result = await fetch(``, {
      method: "post",
      body: JSON.stringify({ addInvoices }),
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
      {/**/}
      <div className="invoices-overlay-container" id="main-overlay-container">
        <div className="add-invoices-overlay">
          <div className="invoices-overlay-top">
            <div className="add-invoices-header">Create Invoices</div>
            <div id="invoices-overlay-close" className="overlay-close">
              X
            </div>
          </div>
          <div className="add-invoices-divider"></div>
          <div className="invoices-container">
            <form onSubmit={handleFormData}>
              <h2 className="invoices-form-per-header">Enter Details</h2>
              <div className="invoices-form-row">
                <div className="invoices-form-element-container">
                  <label className="invoices-form-label">Date Of Invoice</label>
                  <input
                    className="invoices-form-element"
                    type="date"
                    name="dateOfInvoices"
                    onChange={handleOnchange}
                  />
                </div>
                <div className="invoices-form-element-container">
                  <label className="invoices-form-label">Currency</label>
                  <input
                    className="invoices-form-element"
                    type="text"
                    placeholder="Currency"
                    name="currency"
                    onChange={handleOnchange}
                  />
                </div>
              </div>

              <div>
                <div className="invoices-form-element-container">
                  <label className="invoices-form-label">Company Details</label>
                  <textarea
                    className="invoices-form-textarea"
                    placeholder="Company Details"
                    name="companyDetail"
                    onChange={handleOnchange}
                  ></textarea>
                </div>
              </div>
              <hr style={{ marginTop: "30px" }} className="project-divider" />
              <div className="invoices-form-row">
                <div className="invoices-form-element-container">
                  <label className="invoices-form-label">Client Name</label>
                  <select
                    style={{ cursor: "pointer" }}
                    className="invoices-form-element"
                    name="customerName"
                    onChange={handleOnchange}
                    id="invoices-client-name"
                  >
                    <option value="select">Select</option>
                    {/*Fetch Client List*/}
                  </select>
                </div>
              </div>
              <div>
                <div className="invoices-form-element-container">
                  <label className="invoices-form-label">Details</label>
                  <textarea
                    className="invoices-form-textarea"
                    placeholder="Details"
                    name="details"
                    onChange={handleOnchange}
                  ></textarea>
                </div>
              </div>
              <div className="invoices-form-row">
                <div>
                  <div className="invoices-form-element-container">
                    <label className="invoices-form-label">Bill to</label>
                    <textarea
                      style={{ width: "445px" }}
                      className="invoices-form-textarea"
                      placeholder="Bill To"
                      name="billTo"
                      onChange={handleOnchange}
                    ></textarea>
                  </div>
                </div>
                <div>
                  <div className="invoices-form-element-container">
                    <label className="invoices-form-label">Ship To</label>
                    <textarea
                      style={{ width: "445px" }}
                      className="invoices-form-textarea"
                      placeholder="Ship To"
                      name="shipTo"
                      onChange={handleOnchange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <hr style={{ marginTop: "30px" }} className="project-divider" />
              <table id="maintable">
                <tr>
                  <th>Item name</th>
                  <th>Item Code </th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Price/Unit</th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="invoices-table-form-item"
                      name="itemName"
                      placeholder="Item Name"
                      onChange={handleOnchange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="invoices-table-form-item"
                      name="itemCode"
                      placeholder="Item Code"
                      onChange={handleOnchange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="invoices-table-form-item"
                      name="quantity"
                      placeholder="Quantity"
                      onChange={handleOnchange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="invoices-table-form-item"
                      name="unit"
                      placeholder="Unit"
                      onChange={handleOnchange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="invoices-table-form-item"
                      name="price"
                      placeholder="Price per unit"
                      onChange={handleOnchange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="invoices-table-form-item"
                      name="amount"
                      placeholder="Amount"
                      onChange={handleOnchange}
                    />
                  </td>
                </tr>
              </table>
              <div style={{ display: "flex", margin: "20px 0px" }}>
                <button id="addrows" type="button" className="row-addrem-btn">
                  Add more items
                </button>
                <button
                  id="removerows"
                  type="button"
                  className="row-addrem-btn"
                >
                  Remove Item
                </button>
              </div>
              <div className="invoices-total-container">
                <div className="invoices-total-inner-container">
                  <div className="invoices-in-in-container">
                    <p style={{ fontSize: "16px", width: "150px" }}>
                      <b>Subtotal:</b>
                    </p>
                    <input className="invoices-subtotal" readonly />
                  </div>
                  <div className="invoices-in-in-container">
                    <p style={{ fontSize: "16px", width: "150px" }}>
                      <b>Tax (%):</b>
                    </p>
                    <input className="invoices-subtotal" />
                  </div>
                  <div className="invoices-in-in-container">
                    <p style={{ fontSize: "16px", width: "150px" }}>
                      <b>Grand Total:</b>
                    </p>
                    <input className="invoices-subtotal" readonly />
                  </div>
                </div>
              </div>
              <hr style={{ marginTop: "30px" }} className="project-divider" />
              <div>
                <div className="invoices-form-element-container">
                  <label className="invoices-form-label">
                    Terms and Conditions
                  </label>
                  <textarea
                    className="invoices-form-textarea"
                    placeholder="Terms and Conditions"
                    name="termsConditions"
                    onChange={handleOnchange}
                  ></textarea>
                </div>
              </div>
              <div>
                <div className="invoices-form-element-container">
                  <label className="invoices-form-label">Bank Details</label>
                  <textarea
                    className="invoices-form-textarea"
                    placeholder="Bank Details"
                    name="bankDetail"
                    onChange={handleOnchange}
                  ></textarea>
                </div>
              </div>
              <div className="invoices-form-bottom-btn-row">
                <button type="submit" className="add-invoices-submit-btn">
                  Add Invoice
                </button>
                <input
                  id="reset-btn"
                  type="reset"
                  value="Discard"
                  className="discard-btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <TopBar panel="Invoices Management" />
        <div className="invoices-main-container">
          <button type="button" id="add-invoices" className="add-project-btn">
            Add Invoices
          </button>
          <div className="invoices-details-name">
            <div className="cl-det-font invoices-client-name">Client Name</div>
            <div className="cl-det-font invoices-email">Email Address</div>
            <div className="cl-det-font invoices-phoneno">Phone Number</div>
            <div className="cl-det-font invoices-created">Created On</div>
          </div>
          <hr className="project-divider" />
          <InvoiceRow />
        </div>
      </div>
    </>
  );
};

export default Invoices;
