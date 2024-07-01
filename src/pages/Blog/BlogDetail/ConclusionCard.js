import React from 'react';
import './BlogDetail.css';

const ConclusionCard = ({ title, children }) => {
  return (
    <div className='conclusion-section'>
      <div className='conclusion-section-title'>{title}</div>
      <div className='conclusion-desc'>{children}</div>
    </div>
  );
};

export default ConclusionCard;
