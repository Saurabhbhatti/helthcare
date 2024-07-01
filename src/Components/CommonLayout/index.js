import React from 'react';
import './style.css';

const CommonLayout = ({ children }) => {
  return <div className='layout-container'>{children}</div>;
};

export default CommonLayout;
