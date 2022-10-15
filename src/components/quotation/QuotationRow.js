import React from "react";

import "./quotation.css";

const QuotationRow = (props) => {
  return (
    <>
      <div>
        {/*Map required here on parent div when data comes from backend*/}
        <div className="quotation-row-wrapper">
          <div className="quotation-entered-details">
            <div className="cl-det-entered-font quotation-client-name">
              props.clientName
            </div>
            <div className="cl-det-entered-font quotation-email">
              props.emailAddress
            </div>
            <div className="cl-det-entered-font quotation-phoneno">
              props.phoneNumber
            </div>
            <div className="cl-det-entered-font quotation-created">
              props.createdOn
            </div>
          </div>
          <div className="quotation-tools">
            <div>View Details</div>
            <div>Download PDF</div>
          </div>
        </div>
        <hr className="client-divider" />
      </div>
    </>
  );
};

export default QuotationRow;
