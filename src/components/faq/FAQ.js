import { React, useEffect } from "react";
import $ from "jquery";

import TopBar from "../topbar/TopBar";

import "./faq.css";

const FAQ = () => {
  useEffect(() => {
    $(".faq-answer").hide();

    $("#question1").click(function () {
      $("#answer1").slideToggle();
      $("#question1").stopImmediatePropagation();
    });

    $("#question2").click(function () {
      $("#answer2").slideToggle();
      $("#question2").stopImmediatePropagation();
    });

    $("#question3").click(function () {
      $("#answer3").slideToggle();
      $("#question3").stopImmediatePropagation();
    });

    $("#question4").click(function () {
      $("#answer4").slideToggle();
      $("#question4").stopImmediatePropagation();
    });

    $("#question5").click(function () {
      $("#answer5").slideToggle();
      $("#question5").stopImmediatePropagation();
    });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <TopBar panel="Frequently Asked Questions" />
      <div className="faq-question-box">
        <h2 id="question1" className="faq-question">
          What services do architects provide?
          <i class="fa-solid fa-chevron-down"></i>
        </h2>
        <div id="answer1" className="faq-answer">
          Architects see the big picture when it comes to your project. They
          help you explore what appeals to you aesthetically and what you
          require functionally. They coordinate teams of design, engineering and
          construction professionals; they sort through the maze of building
          codes and zoning requirements; they provide design leadership so that
          your project is built the way it was intended.
        </div>
      </div>
      <div className="faq-question-box">
        <h2 id="question2" className="faq-question">
          At what point in my project should I involve an architect?
        </h2>
        <div id="answer2" className="faq-answer">
          As soon as you decide you want to begin planning your project, you
          should start looking for an architect. Architects provide important
          pre-design services including site evaluation, and can help you
          explore options you may not have considered. Involving an architect
          early in the process can help avoid costly missteps, and increase the
          likelihood of your satisfaction with the project.
        </div>
      </div>
      <div className="faq-question-box">
        <h2 id="question3" className="faq-question">
          How do I find the right architect for my project?
        </h2>
        <div id="answer3" className="faq-answer">
          It is critical to find an architect who makes you feel comfortable,
          and with whom you can have open communication. It's also important to
          find an architect with experience in your project type. Our service
          can serve as an important first step in your search; you should also
          seek recommendations from those you know who've worked with us
          previously.
        </div>
      </div>
      <div className="faq-question-box">
        <h2 id="question4" className="faq-question">
          Don't architects add substantial cost to the project?
        </h2>
        <div id="answer4" className="faq-answer">
          While it's true that architects' fees are an additional project cost,
          hiring an architect can actually save you money in many ways.
          Architects can monitor your budget and negotiate to get the best
          materials and workmanship at a good price. An architect's design can
          reduce energy and maintenance costs, and provide an efficient layout
          so that you don’t overbuild what you really need. They can turn a
          difficult lot into a successful building site. And they spend time
          planning and fully developing your ideas to avoid changes once
          construction is underway.
        </div>
      </div>
      <div className="faq-question-box">
        <h2 id="question5" className="faq-question">
          What's my role in the design project?
        </h2>
        <div id="answer5" className="faq-answer">
          Your architect will depend on you to communicate about your design
          preferences, functional requirements, and budget. Your timely response
          to questions and design submissions will help keep the project on
          track. It is also important for you to raise any concerns you have as
          the project proceeds, so they can be addressed in the earliest stages.
          Working in partnership with your architect, you will help achieve a
          successful outcome for your project.
        </div>
      </div>
    </div>
  );
};

export default FAQ;
