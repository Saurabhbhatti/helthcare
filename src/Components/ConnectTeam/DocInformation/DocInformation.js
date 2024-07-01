import React from 'react';
import '../ConnectTeam.css';
import './DocInformation.css';

const DocInformation = ({ docImg, name, post, desc }) => {
  return (
    <div className='doc-card-main'>
      <img
        className='doc-card-img'
        src={docImg}
        alt={name}
        height='260px'
        width='260px'
        loading='lazy'
      />
      <div className='doc-card-name'>{name}</div>
      <div className='doc-card-post'>{post}</div>
      <div className='doc-card-desc'>{desc}</div>
    </div>
  );
};

export default DocInformation;
