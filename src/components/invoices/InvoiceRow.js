import React from "react";

import "./invoices.css";

const InvoiceRow = (props) => {
  return (
    <>
      <div>
        {/*Map required here on parent div when data comes from backend*/}
        <div className="invoices-row-wrapper">
          <div className="invoices-entered-details">
            <div className="cl-det-entered-font invoices-client-name">
              props.clientName
            </div>
            <div className="cl-det-entered-font invoices-email">
              props.emailAddress
            </div>
            <div className="cl-det-entered-font invoices-phoneno">
              props.phoneNumber
            </div>
            <div className="cl-det-entered-font invoices-created">
              props.createdOn
            </div>
          </div>
          <div className="invoices-tools">
            <div>View Details</div>
            <div>Download PDF</div>
          </div>
        </div>
        <hr className="client-divider" />
      </div>
    </>
  );
};

export default InvoiceRow;
