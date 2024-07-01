import React from "react";
import "./Appoinment.css";
import { appointmentCardsData } from "../../helper/content.js";
import * as assets from "../../helper/assets.js";
import PractionerCard from "../practionerCard/PractionerCard";
import AppointmentRequestWidget from "./Appoinment.js";

const AppointmentCards = () => {
  return (
    <>
      <div className="card-container4">
        {appointmentCardsData?.appointmentCardsData?.map((card, index) => (
          <div key={index} className='card-main' >
            <PractionerCard
              img={assets[card.imageUrl]}
              name={card.name}
              post={card.post}
              desc={card.description}
            />
            <div className="appoint-req-btn">
              <AppointmentRequestWidget
                initialScopeId={card.scopeId}
                initialScopeUrl={card.scopeUrl}
                initialApplicationId={card.applicationId}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppointmentCards;
