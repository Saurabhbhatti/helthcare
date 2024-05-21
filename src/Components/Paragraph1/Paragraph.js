import React from "react";
import "./Paragraph.css";
import { useNavigate } from "react-router-dom";

const Paragraphs = () => {
  const navigate = useNavigate();
  
  const handleClickStart = () => {
    navigate("/appointments");
  };

  return (
    <div className="paragraph-container">
      <h1 className="paragraph-text">
        <span>
          Revolutionize weight loss with OTC BODY telehealth! FDA-approved meds, personalized plans, and GLP-1 hunger control. Ditch surgeries, embrace convenience. Start your journey to a healthier you today!
        </span>
      </h1>
      <button className="start-button" onClick={handleClickStart} aria-label="Start Now">
        Start Now
      </button>
      <h1 className="paragraph-text">
        <span>
          Connect with Our Experienced Team
        </span>
      </h1>
    </div>
  );
};

export default Paragraphs;
