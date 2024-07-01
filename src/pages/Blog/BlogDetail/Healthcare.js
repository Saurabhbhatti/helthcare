import React from 'react';
import './BlogDetail.css';

const HealthCare = ({ desc }) => {
  return (
    <div className='health-container'>
      <div className='health-text'>{desc}</div>
    </div>
  );
};

export default HealthCare;
