import React from "react";
import "./DoctorApp.css"; 
import doctor1 from "../../Assets/Image/Doctor1.jpg";
import doctor2 from "../../Assets/Image/Doctor2.jpg";
import doctor3 from "../../Assets/Image/Doctor3.jpg";
import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"

const DoctrsBio = ({ name, photoUrl, bio }) => {
  return (
    
    <div className="doctor-bio">
      <div className="doctor-image">
        <img src={photoUrl} alt={name} className="doctor-photo" />
      </div>
      <div className="doctor-details">
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

const DoctorApp = () => {
  const doctors = [
    {
      name: "Dr. Mehta",
      photoUrl: doctor1,
      bio: "Dr. Mehta attended Georgia State University where he graduated with a degree in Microbiology and Immunology. Afterwards, he attended Medical College of Wisconsin and then completed a residency at Resurrection Medical Center in Chicago. Dr. Mehta moved back to the metro Atlanta area and began focusing his efforts on treating his patients' overall health needs.",
    },
    {
      name: "Dr. Schube",
      photoUrl: doctor2,
      bio: "Dr. Schube graduated from The University of Georgia with a Bachelors of Science and then attended Tel Aviv University Sackler School of Medicine where he earned his Medical Degree. After completing residency training at New York Medical College Metropolitan Hospital, he moved back home to the metro Atlanta area to care for the community and raise a family.",
    },
    {
      name: "Dawn M. Coston",
      photoUrl: doctor3,
      bio: "Dawn M. Coston is a native of Muskegon, Michigan. She has lived in Birmingham, Alabama since 1993. She received her bachelor’s degree in Nursing from the University of Alabama in Huntsville. She completed a master’s degree in Nursing at the University of Alabama at Birmingham in 2003. She is board certified as an Adult Health Nurse Practitioner with the American Academy of Nurse Practitioners. She has practiced in the field of Nephrology since 2007. Her professional memberships include the American Academy of Nurse Practitioners, National Key Foundation, Renal Professionals Association, and Renal Physicians Association.",
    },
  ];

  return (
    <>
    <Header/>
    <div className="app">
      {doctors.map((doctor, index) => (
        <DoctrsBio
          key={index}
          name={doctor.name}
          photoUrl={doctor.photoUrl}
          bio={doctor.bio}
        />
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default DoctorApp;
