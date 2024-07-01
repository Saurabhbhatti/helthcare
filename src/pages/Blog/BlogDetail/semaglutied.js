import React from 'react';
import './BlogDetail.css';

const Semaglutide = ({ title, desc }) => {
  return (
    <div>
      <div className='mechanism-content'>
        <div className='mechanism-dot' />
        <div className='mechanism-title semaglutied-title'>{title}</div>
      </div>
      <div className='blog-data-desc semaglutied-data-desc'>{desc}</div>
    </div>
  );
};

export default Semaglutide;
