import React from 'react';
import './BodyInformation.css';

const BodyCard = ({ headerText, description, src }) => {
  return (
    <div className='body-card-container'>
      <div className='body-container'>
        <div className='body-head-text'>{headerText}</div>
        <img src={src} alt='Icon' className='body-card-img' />
      </div>
      <div className='body-desc-text'>{description}</div>
    </div>
  );
};

export default BodyCard;
