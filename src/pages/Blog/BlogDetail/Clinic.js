import React from 'react';
import './BlogDetail.css';

const ClinicInfo = ({ title, desc }) => {
  return (
    <div>
      <div className='main-heading'>{title}</div>
      <div className='blog-data-desc'>{desc}</div>
    </div>
  );
};

export default ClinicInfo;
