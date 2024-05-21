import React, { useEffect, useRef, lazy, Suspense } from 'react';

const Header = lazy(() => import('../Header/Header'));
const Footer = lazy(() => import('../Footer/Footer'));
const Faq = lazy(() => import('../FAQ/Faq'));
const AppoinmentCards = lazy(() => import('./AppoinmentCard'));

const BookAppointment = () => {
  const nurseSectionRef = useRef(null);

  useEffect(() => {
    if (nurseSectionRef.current) {
      nurseSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div ref={nurseSectionRef} id="nurse-section">
          <AppoinmentCards />
        </div>
        <Faq />
        <Footer />
      </Suspense>
    </>
  );
};

export default BookAppointment;
