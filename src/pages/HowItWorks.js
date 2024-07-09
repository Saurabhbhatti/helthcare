import React from 'react';
import { down_arrow, right_tick } from '../helper/assets';
import data from '../content/HowItWorksPage.json';
import './HowItWorksPage.css';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Section = ({ title, children }) => (
  <div className='section'>
    <h2 className='section-title'>{title}</h2>
    {children}
  </div>
);

const Arrow = () => (
  <div className='arrow-container'>
    <img src={down_arrow} alt='Down arrow' className='arrow' />
  </div>
);

const HowItWorksPage = () => {
  return (
    <div className='how-it-work-container'>
      <div className='container'>
        {data.sections.map((section, index) => (
          <React.Fragment key={index}>
            <Section title={section.title}>
              <p>{section.content}</p>
            </Section>
            {index < data.sections.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
        <ul className="instructions">
          {data.instructions.map((instruction, index) => (
            <li key={index} className="instruction-item">
              <img src={right_tick} className="right-tick-img" alt="Right tick" />
              {instruction}
            </li>
          ))}
        </ul>
        <div className='youtube'>
          {data.videos.map((video, index) => (
            <div key={index} className='youtube-box'>
              <iframe
                width='300'
                height='150'
                src={video}
                allowFullScreen
                loading='lazy'
              ></iframe>
            </div>
          ))}
        </div>
        <Arrow />
        <Section title='ONGOING FOLLOW-UP AND SUPPORT'>
          <p>
            Schedule regular follow-up appointments to monitor the patient's
            progress,
            <br /> review weight loss trends, assess adherence to treatment,
            <br />
            and adjust therapy as needed.
          </p>
        </Section>
      </div>
    </div>
  );
};

export default HowItWorksPage;
