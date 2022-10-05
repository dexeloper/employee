import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideMenu from "./sidemenu/SideMenu";
import Dashboard from "./dashboard/Dashboard.js";
import Clients from "./clients/Clients.js";
import Projects from "./projects/Projects.js";
import Quotation from "./quotation/Quotation.js";
import Invoices from "./invoices/Invoices.js";
import RateList from "./ratelist/RateList.js";
import Portfolio from "./portfolio/Portfolio.js";
import FAQ from "./faq/FAQ.js";

import "./employee.css";

const Employee = () => {
  return (
    <BrowserRouter>
      <div className="main-app-container">
        <SideMenu />
        <Routes>
          <Route exact path="/employee/dashboard" element={<Dashboard />} />
          <Route exact path="/employee/clients" element={<Clients />} />
          <Route exact path="/employee/projects" element={<Projects />} />
          <Route exact path="/employee/quotation" element={<Quotation />} />
          <Route exact path="/employee/invoices" element={<Invoices />} />
          <Route exact path="/employee/ratelist" element={<RateList />} />
          <Route exact path="/employee/portfolio" element={<Portfolio />} />
          <Route exact path="/employee/faq" element={<FAQ />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Employee;
