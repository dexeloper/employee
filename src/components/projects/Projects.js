import { React, useEffect } from "react";
import $ from "jquery";

import TopBar from "../topbar/TopBar";
import OngoingProjects from "./OngoingProjects";
import UpcomingProjects from "./UpcomingProjects";
import CompletedProjects from "./CompletedProjects";

import "./projects.css";

const Projects = () => {
  useEffect(() => {
    $("#upcomingp-box").hide();
    $("#completedp-box").hide();
    $("#ongoingp").addClass("status-projects-onclick");
    $("#upcomingp").click(function () {
      $("#ongoingp-box").fadeOut();
      $("#completedp-box").fadeOut();
      $("#upcomingp-box").fadeIn();
      $("#upcomingp").addClass("status-projects-onclick");
      $("#ongoingp").removeClass("status-projects-onclick");
      $("#completedp").removeClass("status-projects-onclick");
      $("#upcomingp").stopImmediatePropagation();
    });

    $("#ongoingp").click(function () {
      $("#upcomingp-box").fadeOut();
      $("#completedp-box").fadeOut();
      $("#ongoingp-box").fadeIn();
      $("#ongoingp").addClass("status-projects-onclick");
      $("#completedp").removeClass("status-projects-onclick");
      $("#upcomingp").removeClass("status-projects-onclick");
      $("#ongoingp").stopImmediatePropagation();
    });

    $("#completedp").click(function () {
      $("#upcomingp-box").fadeOut();
      $("#ongoingp-box").fadeOut();
      $("#completedp-box").fadeIn();
      $("#completedp").addClass("status-projects-onclick");
      $("#upcomingp").removeClass("status-projects-onclick");
      $("#ongoingp").removeClass("status-projects-onclick");
      $("#completedp").stopImmediatePropagation();
    });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <TopBar panel="Project Management" />
      <div className="project-main-container">
        <button className="add-project-btn">Add Project</button>
        <div className="projects-menu">
          <div id="ongoingp" className="ongoingp">
            Ongoing Projects
          </div>
          <div id="upcomingp" className="upcomingp">
            Upcoming Projects
          </div>
          <div id="completedp" className="completedp">
            Completed Projects
          </div>
        </div>
        <div className="project-details-name">
          <div className="cl-det-font project-name">Project Name</div>
          <div className="cl-det-font project-id">Project ID</div>
          <div className="cl-det-font project-type">Project Type</div>
          <div className="cl-det-font project-assignedto">Assigned To</div>
          <div className="cl-det-font project-date">Start Date</div>
          <div className="cl-det-font project-deadline">Deadline</div>
          <div className="cl-det-font project-progress">Task Progress</div>
        </div>
        <hr className="project-divider" />
        <div>
          <div id="ongoingp-box" className="ongoingp-box">
            No ongoing projects record found!
          </div>
          <div id="upcomingp-box" className="ongoingp-box">
            No upcoming projects record found!
          </div>
          <div id="completedp-box" className="ongoingp-box">
            No completed projects record found!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
