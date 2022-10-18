import { React, useEffect } from "react";
import $ from "jquery";

import TopBar from "../topbar/TopBar";
import QuotationRow from "./QuotationRow";

import "./quotation.css";

const Quotation = () => {
  const [quotationsData, setQuotationsData] = useState([]);
  const [addQuotations, setAddQuotations] = useState({
    currency: "",
    companyDetail: "",
    customerName: "",
    customerId: "",
    details: "",
    billTo: "",
    shipTo: "",
    dateOfQuotation: "",
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
    $("#quotation-overlay-open").click(() => {
      $("body").css("overflow", "hidden");
      $("#main-overlay-container").fadeIn();
    });

    $("#quote-overlay-close").click(() => {
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

    setQuotationsData(data.result);
  };

  function handleOnchange(event) {
    const { name, value } = event.target;

    setAddQuotations((preFormData) => ({
      ...preFormData,
      [name]: value,
    }));
  }

  async function handleFormData(event) {
    event.preventDefault();
    // formData.append(addClients);
    const result = await fetch(``, {
      method: "post",
      body: JSON.stringify({ addQuotations }),
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
      <div className="overlay-container" id="main-overlay-container">
        <div className="add-quote-overlay">
          <div className="quote-overlay-top">
            <div className="add-quote-header">Create Quotations</div>
            <div id="quote-overlay-close" className="overlay-close">
              X
            </div>
          </div>
          <div className="add-quote-divider"></div>
          <div className="quote-container">
            <form>
              <h2 className="quote-form-per-header">Enter Details</h2>
              <div className="quote-form-row">
                <div className="quote-form-element-container">
                  <label className="quote-form-label">Date Of Quotation</label>
                  <input
                    className="quote-form-element"
                    type="date"
                    name="dateOfQuotation"
                    onChange={handleOnchange}
                  />
                </div>
                <div className="quote-form-element-container">
                  <label className="quote-form-label">Currency</label>
                  <input
                    className="quote-form-element"
                    type="text"
                    placeholder="Currency"
                    name="currency"
                    onChange={handleOnchange}
                  />
                </div>
              </div>
              <div>
                <div className="quote-form-element-container">
                  <label className="quote-form-label">Company Details</label>
                  <textarea
                    className="quote-form-textarea"
                    placeholder="Company Details"
                    name="companyDetail"
                    onChange={handleOnchange}
                  ></textarea>
                </div>
              </div>
              <hr style={{ marginTop: "30px" }} className="project-divider" />
              <div className="quote-form-row">
                <div className="quote-form-element-container">
                  <label className="quote-form-label">Client Name</label>
                  <select
                    style={{ cursor: "pointer" }}
                    className="quote-form-element"
                    name="customerName"
                    id="quote-client-name"
                    onChange={handleOnchange}
                  >
                    <option value="select">Select</option>
                    {/*Fetch Client List*/}
                  </select>
                </div>
              </div>
              <div>
                <div className="quote-form-element-container">
                  <label className="quote-form-label">Details</label>
                  <textarea
                    className="quote-form-textarea"
                    placeholder="Details"
                    name="details"
                    onChange={handleOnchange}
                  ></textarea>
                </div>
              </div>
              <div className="quote-form-row">
                <div>
                  <div className="quote-form-element-container">
                    <label className="quote-form-label">Bill to</label>
                    <textarea
                      style={{ width: "445px" }}
                      className="quote-form-textarea"
                      placeholder="Bill To"
                      name="billTo"
                      onChange={handleOnchange}
                    ></textarea>
                  </div>
                </div>
                <div>
                  <div className="quote-form-element-container">
                    <label className="quote-form-label">Ship To</label>
                    <textarea
                      style={{ width: "445px" }}
                      className="quote-form-textarea"
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
                      className="quote-table-form-item"
                      name="itemName"
                      placeholder="Item Name"
                      onChange={handleOnchange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="quote-table-form-item"
                      name="itemCode"
                      placeholder="Item Code"
                      onChange={handleOnchange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="quote-table-form-item"
                      name="quantity"
                      placeholder="Quantity"
                      onChange={handleOnchange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="quote-table-form-item"
                      name="unit"
                      placeholder="Unit"
                      onChange={handleOnchange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="quote-table-form-item"
                      name="price"
                      placeholder="Price per unit"
                      onChange={handleOnchange}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="quote-table-form-item"
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
              <div className="quote-total-container">
                <div className="quote-total-inner-container">
                  <div className="quote-in-in-container">
                    <p style={{ fontSize: "16px", width: "150px" }}>
                      <b>Subtotal:</b>
                    </p>
                    <input type="number" className="quote-subtotal" readonly />
                  </div>
                  <div className="quote-in-in-container">
                    <p style={{ fontSize: "16px", width: "150px" }}>
                      <b>Tax (%):</b>
                    </p>
                    <input type="number" className="quote-subtotal" />
                  </div>
                  <div className="quote-in-in-container">
                    <p style={{ fontSize: "16px", width: "150px" }}>
                      <b>Grand Total:</b>
                    </p>
                    <input type="number" className="quote-subtotal" readonly />
                  </div>
                </div>
              </div>
              <hr style={{ marginTop: "30px" }} className="project-divider" />
              <div>
                <div className="quote-form-element-container">
                  <label className="quote-form-label">
                    Terms and Conditions
                  </label>
                  <textarea
                    className="quote-form-textarea"
                    placeholder="Terms and Conditions"
                    name="termsConditions"
                    onChange={handleOnchange}
                  ></textarea>
                </div>
              </div>
              <div>
                <div className="quote-form-element-container">
                  <label className="quote-form-label">Bank Details</label>
                  <textarea
                    className="quote-form-textarea"
                    placeholder="Bank Details"
                    name="bankDetail"
                    onChange={handleOnchange}
                  ></textarea>
                </div>
              </div>
              <div className="quote-form-bottom-btn-row">
                <button type="submit" className="add-quote-submit-btn">
                  Add Project
                </button>
                <input
                  id="reset-btn"
                  type="reset"
                  value="Discard"
                  className="discard-btn"
                  onChange={handleOnchange}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <TopBar panel="Quotation Management" />
        <div className="quotation-main-container">
          <button id="quotation-overlay-open" className="add-project-btn">
            Add Quotation
          </button>

          <div className="quotation-details-name">
            <div className="cl-det-font quotation-client-name">Client Name</div>
            <div className="cl-det-font quotation-email">Email Address</div>
            <div className="cl-det-font quotation-phoneno">Phone Number</div>
            <div className="cl-det-font quotation-created">Created On</div>
          </div>
          <hr className="project-divider" />
          <QuotationRow />
        </div>
      </div>
    </>
  );
};

export default Quotation;
