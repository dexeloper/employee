import React from "react";

const ProjectStatus = (props) => {
  return (
    <div className="e-project-report-container">
      <h2 className="e-p-r-number">0</h2>
      <p className="status-project">{props.statusName}</p>
    </div>
  );
};

export default ProjectStatus;
