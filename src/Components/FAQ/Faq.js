import React, { useState } from "react";
import "./Faq.css"; 

function DropdownCard({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-card">
      <div className="dropdown-header" onClick={toggleOpen}>
        <h3 className="question">{question}</h3>
        <span className={`arrow ${isOpen ? "up" : "down"}`}></span>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <p className="answer">{answer}</p>
        </div>
      )}
    </div>
  );
}

function dropdown() {
  return (
    <div className="dropdown">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <DropdownCard
        question="What is OTC BODY telehealth treatment?"
        answer="OTC BODY offers an affordable telehealth treatment for weight loss, providing FDA-approved medications like Semaglutide along with personalized treatment plans, routine consultations, and access to medical weight management programs."
      />
      <DropdownCard
        question="How does Semaglutide treatment work?"
        answer="Semaglutide acts as a hunger suppressor (GLP-1) in the body, curbing cravings without the need for invasive surgeries or feelings of starvation, making it effective for overweight or obese individuals."
      />
      <DropdownCard
        question="What are the benefits of OTC BODY weight management programs?"
        answer=" Our weight management programs are backed by years of industry leadership and include evidence-based medical protocols, implementation assistance, staff training, and nutritional plans/guides for disciplined follow-through."
      />
      <DropdownCard
        question="How soon can I start the weight management program?"
        answer="You can get started within 30-60 days, receiving personalized treatment plans and access to all necessary resources for successful weight loss."
      />
      <DropdownCard
        question="Is the telehealth treatment affordable?"
        answer="Yes, OTC BODY telehealth treatment is designed to be affordable and accessible, ensuring that individuals struggling with weight loss can receive effective care without financial barriers."
      />
    </div>
  );
}

export default dropdown;
