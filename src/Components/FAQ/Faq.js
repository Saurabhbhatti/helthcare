import React from 'react';
import CommonLayout from '../CommonLayout';
import { FAQAnswer, Question, QuestionCheckMark } from '../../helper/assets';
import './Faq.css';
import { faqQuestion } from '../../helper/content';

const Faq = () => {
  return (
    <CommonLayout>
      <div className='faq-container'>
        <div style={{ flexDirection: 'column' }}>
          <div>
            {' '}
            <div className='faq-question-container'>
              <div className='faq-line'>
                FREQUENTLY <br />
                ASKED
                <br /> QUESTIONS
              </div>
              <img
                src={Question}
                alt='FAQ Questions'
                className='faq-question-image'
              />
            </div>
          </div>
          <div>
            <div className='faq-content'>
              <div className='faq-main'>
                {faqQuestion.map((item, index) => (
                  <div key={index} className='faq-item'>
                    <img
                      src={QuestionCheckMark}
                      alt='Check Mark'
                      className='check-mark'
                    />
                    <div className='faq-question'>{item.question}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img src={FAQAnswer} alt='FAQ Answer' className='faq-answer-image' />
      </div>
    </CommonLayout>
  );
};

export default Faq;
