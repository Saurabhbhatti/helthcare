import React from 'react';
import CommonLayout from '../CommonLayout';
import './BodyInformation.css';
import BodyCard from './BodyCard';
import { User, Hand, Setting, BodyInfo } from '../../helper/assets';
import { bodyInfo } from '../../helper/content';

const BodyInformation = () => {
  const bodyImages = {
    User,
    Hand,
    Setting,
  };

  return (
    <CommonLayout>
      <div className='body-info-container'>
        <img className='body-img' src={BodyInfo} alt='Body Information' />
        <div className='card-container-info'>
          {bodyInfo.map((item, index) => (
            <BodyCard
              key={index}
              src={bodyImages[item.img]}
              headerText={item.headerText}
              description={item.desc}
            />
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};

export default BodyInformation;
