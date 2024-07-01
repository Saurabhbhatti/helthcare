import React from 'react';
import './practionerCard.css';

const PractionerCard = ({ img, name, post, desc }) => {
  return (
    <div className='card-main'>
      <img
        className='card-img'
        src={img}
        alt={name}
        height='260px'
        width='100%'
        loading='lazy'
      />
      <div className='card-name'>{name}</div>
      <div className='card-post'>{post}</div>
      <div className='card-desc'>{desc}</div>
    </div>
  );
};

export default PractionerCard;
