import React, { useState } from 'react';
import '../Appoinments/AppoinmentFaq.css';
import { questionIcon } from '../../helper/assets';
import { appointmentFaqData } from '../../helper/content';

function FaqDropdown({ id, question, answer, isOpen, toggleOpen }) {
  return (
    <div
      className={isOpen ? 'faq-dropdown-open-custom' : 'faq-dropdown-custom'}
    >
      <div
        className={isOpen ? 'faq-header-open-custom' : 'faq-header-custom'}
        onClick={toggleOpen}
      >
        <h3 className={isOpen ? 'question-open-custom' : 'question-custom'}>
          {question}
        </h3>
      </div>
      {isOpen && (
        <div className='faq-content-custom'>
          <p className='answer-custom'>{answer}</p>
        </div>
      )}
    </div>
  );
}

function AppoinmentFaq() {
  const [openId, setOpenId] = useState(0);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <h1 className='faq-title-custom'>
        Frequently Asked Questions
        <img src={questionIcon} alt='question' />
      </h1>
      <div className='faq-container-custom'>
        <div className='faq-custom'>
          {appointmentFaqData?.faqs?.map((faq, index) => (
            <FaqDropdown
              key={index}
              id={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === index}
              toggleOpen={() => toggleOpen(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AppoinmentFaq;
