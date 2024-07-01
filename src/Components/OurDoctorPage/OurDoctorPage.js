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
      <Header />
      <HomePageCarousel />
      <HealthDescription />
      <ConnectTeam />
      <Services />
      <Semaglutied />
      <BodyInformation/>
      <Faq />
      <Footer />
    </div>
  );
};

export default OurDoctorPage;
