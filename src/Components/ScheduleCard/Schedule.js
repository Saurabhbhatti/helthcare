import React from 'react';

import './schedule.css';
import * as assets from '../../helper/assets.js';
import { scheduleCardsData } from '../../helper/content';

export const ScheduleCard = ({ imageUrl, step, heading, description }) => {
  return (
    <div className='schedule-card'>
      <p className='schedule-step'>{step}</p>
      <p className='schedule-heading'>
        <div className='schedule-heading-sub'>{heading}</div>
      </p>
      <div className='schedule-main-card'>
        <span className='schedule-desc-image'>
          <img src={imageUrl} />
        </span>
        <p className='schedule-description'>{description}</p>
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className='schedule-cards'>
      <div>
        {scheduleCardsData?.scheduleCardsData?.map((card, index) => (
          <ScheduleCard
            imageUrl={assets[card?.imageUrl]}
            description={card?.description}
            heading={card?.heading}
            step={card?.step}
          />
        ))}
      </div>
      <div className='schedule-card-right'>
        <img src={assets.SHEDULE_BACKGROUND_IMG} />
      </div>
    </div>
  );
};

export default Schedule;
