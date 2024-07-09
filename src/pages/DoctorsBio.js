import React from 'react';
import { teamContent } from '../helper/content';
import {
  DR_PRATIK_MEHTA,
  DR_SCHUBE,
  JAIMEE_USSERY,
  USER_PLACEHOLDER,
  DAWN_M_COSTON,
} from '../helper/assets';
import './DoctorBio.css';

const DoctorBioCard = ({ name, photoUrl, bio }) => (
  <div className='doctor-bio-card'>
    <div className='image-container'>
      <img
        src={photoUrl}
        alt={name}
        loading='lazy'
        aria-label={`Photo of ${name}`}
        className='image'
      />
    </div>
    <div className='details-container'>
      <h2 className='name'>{name}</h2>
      <p className='bio'>{bio}</p>
    </div>
  </div>
);

const DoctorBio = () => {
  const doctorImages = {
    DR_PRATIK_MEHTA,
    DR_SCHUBE,
    JAIMEE_USSERY,
    USER_PLACEHOLDER,
    DAWN_M_COSTON,
  };

  return (
    <div className='doctor-bio-container'>
      <main className='content'>
        <div className='doctors-list'>
          {teamContent.doctors.map((doctor, index) => (
            <DoctorBioCard
              key={index}
              name={doctor.name}
              photoUrl={doctorImages[doctor.photoUrl]}
              bio={doctor.bio}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DoctorBio;
