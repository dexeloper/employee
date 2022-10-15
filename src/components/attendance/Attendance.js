import { React, useState } from "react";

import "./attendance.css";

const Attendance = (props) => {
  const [checkedIn, setCheckedIn] = useState(true);

  const checkedInVal = () => {
    setCheckedIn((checkedIn) => !checkedIn);
    if (checkedIn) {
      alert("You are checked in and your attendance is recorded.");
    } else {
      alert("You are checked out.");
    }
  };

  return (
    <div className="att-in-container">
      <button type="button" onClick={checkedInVal} className="tb-check-btn">
        {checkedIn ? "Check In" : "Check Out"}
      </button>
      <p>[Time]</p>
    </div>
  );
};

export default Attendance;
