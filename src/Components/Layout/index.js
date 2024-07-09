import React from 'react';
import { Footer, Header } from '..';
import './style.css';

const Layout = ({ children }) => {
  return (
    <div className='main-layout-container'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
