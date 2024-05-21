import React, { useState } from "react";
import "../FAQ/Faq.css";

function FaqDropdown({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-dropdown">
      <div className="faq-header" onClick={toggleOpen}>
        <h3 className="question">{question}</h3>
        <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
      </div>
      {isOpen && (
        <div className="faq-content">
          <p className="answer">{answer}</p>
        </div>
      )}
    </div>
  );
}

function Faq() {
  return (
    <div className="faq">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <FaqDropdown
        question="What is OTC BODY telehealth treatment?"
        answer="OTC BODY offers an affordable telehealth treatment for weight loss, providing FDA-approved medications like Semaglutide along with personalized treatment plans, routine consultations, and access to medical weight management programs."
      />
      <FaqDropdown
        question="How does Semaglutide treatment work?"
        answer="Semaglutide acts as a hunger suppressor (GLP-1) in the body, curbing cravings without the need for invasive surgeries or feelings of starvation, making it effective for overweight or obese individuals."
      />
      <FaqDropdown
        question="What are the benefits of OTC BODY weight management programs?"
        answer="Our weight management programs are backed by years of industry leadership and include evidence-based medical protocols, implementation assistance, staff training, and nutritional plans/guides for disciplined follow-through."
      />
      <FaqDropdown
        question="How soon can I start the weight management program?"
        answer="You can get started within 30-60 days, receiving personalized treatment plans and access to all necessary resources for successful weight loss."
      />
      <FaqDropdown
        question="Is the telehealth treatment affordable?"
        answer="Yes, OTC BODY telehealth treatment is designed to be affordable and accessible, ensuring that individuals struggling with weight loss can receive effective care without financial barriers."
      />
    </div>
  );
}

export default Faq;
