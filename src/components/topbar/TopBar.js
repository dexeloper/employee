import { React, useEffect } from "react";
import $ from "jquery";

import "./topBar.css";

const TopBar = (props) => {
  useEffect(() => {
    $("#tb-profile-menu").hide();
    $("#tb-profile-btn").click(() => {
      $("#tb-profile-menu").fadeToggle();
      $("#tb-profile-menu").stopImmediatePropagation();
    });
  }, []);

  return (
    <div className="top-bar-container">
      <div className="tb-left">
        <h2 className="e-panel-name">{props.panel}</h2>
      </div>
      <div className="tb-right">
        <div id="tb-profile-btn" className="emp-img-container">
          <img className="emp-img" src={require("./react.png")} />
        </div>
        <div className="e-name-tb-container">
          <p className="tb-greet">Hello</p>
          <h3 className="tb-emp-name">Employee Name</h3>
        </div>
        <div id="tb-profile-menu" className="tb-profile-menu">
          {/*Convert to <Link />*/}
          <div className="tb-menu-options">My Profile</div>
          <div className="tb-menu-options">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
