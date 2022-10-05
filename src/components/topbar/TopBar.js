import React from "react";

import "./topBar.css";

const TopBar = (props) => {
  return (
    <div className="top-bar-container">
      <div className="tb-left">
        <h2 className="e-panel-name">{props.panel}</h2>
        <div className="check-box">
          <button className="tb-check-btn">Check In</button>
          <p>[Time]</p>
        </div>
      </div>

      <div className="tb-right">
        <div className="emp-img-container">
          <img className="emp-img" src={require("./react.png")} />
        </div>
        <div className="e-name-tb-container">
          <p className="tb-greet">Hello</p>
          <h3 className="tb-emp-name">Employee Name</h3>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
