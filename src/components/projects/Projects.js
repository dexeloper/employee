import { React, useEffect, useState } from "react";
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
      $("#upcomingp").stoprommediatePropagation();
    });

    $("#ongoingp").click(function () {
      $("#upcomingp-box").fadeOut();
      $("#completedp-box").fadeOut();
      $("#ongoingp-box").fadeIn();
      $("#ongoingp").addClass("status-projects-onclick");
      $("#completedp").removeClass("status-projects-onclick");
      $("#upcomingp").removeClass("status-projects-onclick");
      $("#ongoingp").stoprommediatePropagation();
    });

    $("#completedp").click(function () {
      $("#upcomingp-box").fadeOut();
      $("#ongoingp-box").fadeOut();
      $("#completedp-box").fadeIn();
      $("#completedp").addClass("status-projects-onclick");
      $("#upcomingp").removeClass("status-projects-onclick");
      $("#ongoingp").removeClass("status-projects-onclick");
      $("#completedp").stoprommediatePropagation();
    });

    $("#project-overlay-open").click(() => {
      $("body").css("overflow", "hidden");
      $("#main-overlay-container").fadeIn();
    });

    $("#project-overlay-close").click(() => {
      $("body").css("overflow", "scroll");
      $("#main-overlay-container").fadeOut(250);
    });
  }, []);

  const [dummyState, dummyStateController] = useState(true);

  return (
    <>
      {/*Projects Overlay*/}
      <div className="overlay-container" id="main-overlay-container">
        <div className="add-project-overlay">
          <div className="project-overlay-top">
            <div className="add-project-header">Add Projects</div>
            <div id="project-overlay-close" className="overlay-close">
              X
            </div>
          </div>
          <div className="add-project-divider"></div>
          <div className="pro-container">
            <form>
              <h2 className="pro-form-per-header">Project Details</h2>
              <div className="pro-form-row">
                <div className="pro-form-element-container">
                  <label className="pro-form-label">Project Name</label>
                  <input
                    className="pro-form-element"
                    type="text"
                    placeholder="Project Name"
                    name="project-name"
                  />
                </div>
                <div className="pro-form-element-container">
                  <label className="pro-form-label">Project Type</label>
                  <select
                    style={{ cursor: "pointer" }}
                    className="pro-form-element"
                    name="project-type"
                    id="project-type"
                  >
                    <option value="select">Select</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
                <div className="pro-form-element-container">
                  <label className="pro-form-label">Employee</label>
                  <select
                    style={{ cursor: "pointer" }}
                    className="pro-form-element"
                    name="pro-form-employee"
                    id="pro-form-employee"
                  >
                    <option value="select">Select</option>
                    {/*Employees to be fetched here for drop down*/}
                  </select>
                </div>
              </div>
              <div className="pro-form-row">
                <div className="pro-form-element-container">
                  <label className="pro-form-label">Start Date</label>
                  <input
                    className="pro-form-element"
                    type="date"
                    name="project-start-date"
                  />
                </div>
                <div className="pro-form-element-container">
                  <label className="pro-form-label">Amount</label>
                  <input
                    className="pro-form-element"
                    type="number"
                    placeholder="Amount"
                    name="project-amount"
                  />
                </div>
                <div className="pro-form-element-container">
                  <label className="pro-form-label">Client</label>
                  <select
                    style={{ cursor: "pointer" }}
                    className="pro-form-element"
                    name="client-of-project"
                    id="client-of-project"
                  >
                    <option value="select">Select</option>
                    {/*Clients Fetched Here*/}
                  </select>
                </div>
              </div>
              <div className="pro-form-row">
                <div className="pro-form-element-container">
                  <label className="pro-form-label">Dead Line</label>
                  <input
                    className="pro-form-element"
                    type="date"
                    name="project-dead-line"
                  />
                </div>
                <div className="pro-form-element-container">
                  <label className="pro-form-label">Sheet Type</label>
                  <select
                    style={{ cursor: "pointer" }}
                    className="pro-form-element"
                    name="project-sheet-type"
                    id="project-sheet-type"
                  >
                    <option value="select">Select</option>
                    <option value="PER Sheet">PER Sheet</option>
                    <option value="ECR Sheet">ECR Sheet</option>
                    <option value="ICR Sheet">ICR Sheet</option>
                    <option value="Other type of sheet">Other</option>
                  </select>
                </div>
                <div className="pro-form-element-container">
                  <label className="pro-form-label">Upload Sheet</label>
                  <input
                    className="pro-form-image"
                    type="file"
                    name="uploaded-sheet"
                  />
                </div>
              </div>
              <div>
                <div className="pro-form-element-container">
                  <label className="pro-form-label">Comments</label>
                  <textarea
                    className="pro-form-textarea"
                    placeholder="Comments..."
                    name="project-comments"
                  ></textarea>
                </div>
              </div>
              <div className="pro-form-row">
                {/*Close overlay on Project sent*/}
                <button type="submit" className="add-project-submit-btn">
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <TopBar panel="Project Management" />

        {/*Projects Main Container*/}
        <div className="project-main-container">
          {/*Overlay Opener*/}
          <button id="project-overlay-open" className="add-project-btn">
            Add Project
          </button>

          {/*Projects Menu Selection*/}
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

          {/*Main Projects List Container*/}
          <div className="project-details-name">
            <div className="cl-det-font project-name">Project Name</div>
            <div className="cl-det-font project-id">Project ID</div>
            <div className="cl-det-font project-type">Project Type</div>
            <div className="cl-det-font project-assignedto">Assigned To</div>
            <div className="cl-det-font project-date">Start Date</div>
            <div className="cl-det-font project-deadline">Deadline</div>
            <div className="cl-det-font project-progress">Task Progress</div>
          </div>
          <hr style={{ marginTop: "15px", opacity: "0.35" }} />
          <div>
            <div id="ongoingp-box" className="ongoingp-box">
              {dummyState ? (
                <OngoingProjects />
              ) : (
                "No ongoing projects record found!"
              )}
            </div>
            <div id="upcomingp-box" className="ongoingp-box">
              {dummyState ? (
                <UpcomingProjects />
              ) : (
                "No upcoming projects record found!"
              )}
            </div>
            <div id="completedp-box" className="ongoingp-box">
              {dummyState ? (
                <CompletedProjects />
              ) : (
                "No completed projects record found!"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
