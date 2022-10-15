import React from "react";

const UpcomingProjects = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        {/*Map required here on parent div when data comes from backend*/}
        <div className="project-row-container">
          <div className="project-details-name">
            <div className="pro-det-entered-font project-name">
              props.projectName
            </div>
            <div className="pro-det-entered-font project-id">
              props.projectId
            </div>
            <div className="pro-det-entered-font project-type">
              props.projectType
            </div>
            <div className="pro-det-entered-font project-assignedto">
              props.assignedTo
            </div>
            <div className="pro-det-entered-font project-date">
              props.startDate
            </div>
            <div className="pro-det-entered-font project-deadline">
              props.deadLine
            </div>
            <div className="pro-det-entered-font project-progress">
              props.taskProgress
            </div>
          </div>
          <div className="project-tools">
            <div>Sheet</div>
            <div>Details</div>
          </div>
        </div>
        <hr className="project-divider" />
      </div>
    </>
  );
};

export default UpcomingProjects;
