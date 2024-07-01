import React from 'react';
import './BlogDetail.css';

const Mechanism = ({ title, desc }) => {
  return (
    <>
      <div className='mechanism-content'>
        <div className='mechanism-dot' />
        <div className='mechanism-title'>{title}</div>
      </div>
      <div className='blog-data-desc'>{desc}</div>
    </>
  );
};

export default Mechanism;
