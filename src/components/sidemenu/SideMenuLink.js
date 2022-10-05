import { React, useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import "./styles/sideMenu.css";

const SideMenuLink = (props) => {
  return (
    <Link to={props.to} className="sm-link">
      <div id={props.click} className="sm-link-box">
        <i className={props.icon}></i>
        <p id={props.id} className="sm-link-text">
          {props.linkName}
        </p>
      </div>
    </Link>
  );
};

export default SideMenuLink;
