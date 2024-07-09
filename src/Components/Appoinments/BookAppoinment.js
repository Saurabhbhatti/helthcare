import React from 'react';
import '../Appoinments/Appoinment.css';
import AppoinmentCards from './AppoinmentCard';
import Schedule from '../ScheduleCard/Schedule';
import { connectIcon } from '../../helper/assets';
import AppoinmentFaq from './AppoinmentFaq';

const BookAppointment = () => {
  return (
    <div className='appoinment-container'>
      <div id='nurse-section'>
        <div className='user-icon-container'>
          <img
            src={connectIcon}
            alt='userIcon'
            width={'40px'}
            height={'30px'}
            className='user-icon'
          />
        </div>
        <h1 className='paragraph-heading-booking'>
          <span>Connect with Our Experienced Team</span>
        </h1>
        <AppoinmentCards />
        <Schedule />
      </div>
      <AppoinmentFaq />
    </div>
  );
};

export default BookAppointment;
