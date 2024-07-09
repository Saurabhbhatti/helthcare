import React from 'react';
import '../OurDoctorPage/OurDoctorPage.css';
import {
  Header,
  HomePageCarousel,
  Services,
  HealthDescription,
  ConnectTeam,
  Semaglutied,
  Faq,
  Footer,
  BodyInformation,
} from '..';

const OurDoctorPage = () => {
  return (
    <div className='Main-container'>
      <HomePageCarousel />
      <HealthDescription />
      <ConnectTeam />
      <Services />
      <Semaglutied />
      <BodyInformation />
      <Faq />
    </div>
  );
};

export default OurDoctorPage;
