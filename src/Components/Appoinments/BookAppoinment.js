import React from "react";
import "../Appoinments/Appoinment.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppoinmentCards from "./AppoinmentCard";
import Schedule from "../ScheduleCard/Schedule";
import { connectIcon } from "../../helper/assets";
import AppoinmentFaq from "./AppoinmentFaq";

const BookAppointment = () => {

  return (
    <>
      <Header />
      <div id="nurse-section">
        <div className="user-icon-container">
          <img
            src={connectIcon}
            alt="userIcon"
            width={"40px"}
            height={"30px"}
            className="user-icon"
          />
        </div>
        <h1 className="paragraph-heading-booking">
          <span>Connect with Our Experienced Team</span>
        </h1>
        <AppoinmentCards />
        <Schedule />
      </div>
      <AppoinmentFaq/>
      <Footer />
    </>
  );
};

export default BookAppointment;
