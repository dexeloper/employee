import React from "react";

import TopBar from "../topbar/TopBar";
import ProjectStatus from "./ProjectStatus";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <div style={{ width: "100%" }}>
      <TopBar panel="Sales Dashboard" />
      <div className="e-project-reports-list">
        <ProjectStatus statusName="Total Projects" />
        <ProjectStatus statusName="Ongoing Projects" />
        <ProjectStatus statusName="Projects Completed" />
        <ProjectStatus statusName="Upcoming Projects" />
        <ProjectStatus statusName="Clients" />
      </div>

      <div className="projects-graph-container">
        <h2 className="project-graph-heading">Projects</h2>
      </div>
    </div>
  );
};

export default Dashboard;
