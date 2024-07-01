import React from 'react';
import './HealthDescription.css';
import { useNavigate } from 'react-router-dom';

const HealthDescription = () => {
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate('/appointments');
  };

  return (
    <div className="health-description-container">
      <div className="description-top">
        <div className="description-left">
          <p className="description-text">
            Revolutionize weight loss with OTC BODY telehealth! <br />
            FDA-approved meds, personalized plans, and GLP-1 hunger control. <br />
            Ditch surgeries, embrace convenience.
          </p>
          <button
            className="start-button"
            onClick={handleClickStart}
            aria-label="Start Now"
          >
            Start Now
          </button>
        </div>
        <div className="description-right">
          START YOUR JOURNEY TO A HEALTHIER YOU TODAY!
        </div>
      </div>
    </div>
  );
};

export default HealthDescription;
