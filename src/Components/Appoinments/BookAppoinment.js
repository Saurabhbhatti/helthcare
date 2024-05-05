import React, { useEffect, useRef } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Faq from '../FAQ/Faq';
import AppoinmentCards from './AppoinmentCard';
import AnchorCard from '../Card3/AnchorCard';

const BookAppoointment = () => {
  const nurseSectionRef = useRef(null);

  useEffect(() => {
    if (nurseSectionRef.current) {
      nurseSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <Header />
      <div ref={nurseSectionRef} id="nurse-section">
      <AppoinmentCards />
      </div>
      <Faq />
      <Footer />
    </div>
  );
};

export default BookAppoointment;
