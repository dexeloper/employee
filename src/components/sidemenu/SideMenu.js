import { React } from "react";

import SideMenuLink from "./SideMenuLink";
import Attendance from "../attendance/Attendance";

import "./styles/sideMenu.css";

const SideMenu = () => {
  return (
    <div className="side-menu-container">
      <img
        src={require("./images/logofinal.png")}
        className="logo-final-side-menu"
      />
      <div className="sm-links-container">
        <SideMenuLink
          click="dashboard-clicked"
          id="dashboard-link"
          to="/employee/dashboard"
          linkName="Dashboard"
          icon="fa-solid fa-chart-line sm-fa-icons"
        />
        <SideMenuLink
          click="clients-clicked"
          id="clients-link"
          to="/employee/clients"
          linkName="Clients"
          icon="fa-solid fa-hand-holding-dollar sm-fa-icons"
        />
        <SideMenuLink
          click="projects-clicked"
          id="projects-link"
          to="/employee/projects"
          linkName="Projects"
          icon="fa-solid fa-list-check sm-fa-icons"
        />
        <SideMenuLink
          click="quotation-clicked"
          id="quotation-link"
          to="/employee/quotation"
          linkName="Quotation"
          icon="fa-regular fa-message sm-fa-icons"
        />
        <SideMenuLink
          click="invoices-clicked"
          id="invoices-link"
          to="/employee/invoices"
          linkName="Invoices"
          icon="fa-solid fa-file-invoice-dollar sm-fa-icons"
        />
        <SideMenuLink
          click="ratelist-clicked"
          id="ratelist-link"
          to="/employee/ratelist"
          linkName="Rate List"
          icon="fa-solid fa-rectangle-list sm-fa-icons"
        />
        <SideMenuLink
          click="portfolio-clicked"
          id="portfolio-link"
          to="/employee/portfolio"
          linkName="Portfolio"
          icon="fas fa-briefcase sm-fa-icons"
        />
        <SideMenuLink
          click="faq-clicked"
          id="faq-link"
          to="/employee/faq"
          linkName="FAQ"
          icon="far fa-question-circle sm-fa-icons"
        />
      </div>
      <div>
        <Attendance />
      </div>
    </div>
  );
};

export default SideMenu;
