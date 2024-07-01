import React from 'react';
import { serviceContent } from '../../helper/content.js';
import {
  ServiceIcon,
  COMPOUND_SEMAGLUTIDE_WEIGHT,
  MEAL_REPLACEMENT_PROGRAM,
  MANAGED_WIGHT_LOSS_PROGRAM,
} from '../../helper/assets.js';
import './Services.css';

const imageUrlMap = {
  COMPOUND_SEMAGLUTIDE_WEIGHT: COMPOUND_SEMAGLUTIDE_WEIGHT,
  MEAL_REPLACEMENT_PROGRAM: MEAL_REPLACEMENT_PROGRAM,
  MANAGED_WIGHT_LOSS_PROGRAM: MANAGED_WIGHT_LOSS_PROGRAM,
};

export const ServiceCard = ({ imageUrl, description, subDescription }) => {
  const imageSrc = imageUrlMap[imageUrl];

  return (
    <div className='service-main-card'>
      <span className='service-desc-image'>
        <img className='service-desc-img' src={imageSrc} alt='Service' />
      </span>
      <p className='description2'>{description}</p>
      <p className='second-description2'>{subDescription}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className='service-container '>
      <div className='service-icon-container'>
        <img
          src={ServiceIcon}
          alt='service-icon'
          width={'40px'}
          height={'40px'}
          className='service-icon'
        />
      </div>
      <div className='service-header'>Our Services</div>
      <div className='service-cards'>
        {serviceContent?.map((card, index) => (
          <ServiceCard
            imageUrl={card?.imageUrl}
            description={card?.description}
            subDescription={card?.subDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
