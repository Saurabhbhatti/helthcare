import React from "react";
import "./Appoinment.css";
import card1 from "../../Assets/Image/dct1.jpg";
import Card2 from "../../Assets/Image/dct2.jpg";
import Card3 from "../../Assets/Image/dct3.jpg";
import AppointmentRequestWidget from "./Appoinment";

const AppoinmentCard = ({
  imageUrl,
  description,
  scopeId,
  scopeUrl,
  applicationId,
}) => {
  return (
    <div className="card4">
      <div className="card-image4">
        <img src={imageUrl} alt="Card4" />
      </div>
      <div className="card-description4">
        <p>{description}</p>
        <AppointmentRequestWidget
          initialScopeId={scopeId}
          initialScopeUrl={scopeUrl}
          initialApplicationId={applicationId}
        />
      </div>
    </div>
  );
};

const AppoinmentCards = () => {
  const cardsData = [
    {
      imageUrl: card1,
      description: "Sandy Ndetah- New Mexico Nurse Practitioner",
      scopeId: "b343f131-5bbc-4bb1-bfa4-15530b7fa1fe",
      scopeUrl: "sandy-ndetah",
      applicationId:
        "7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b",
    },
    {
      imageUrl: Card2,
      description: "Jaimee Ussery- Iowa Nurse Practitioner",
      scopeId: "7c019d46-6fb2-4a42-9d25-253151e62ac2",
      scopeUrl: "jaimee-ussery5125",
      applicationId:
        "7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b",
    },
    {
      imageUrl: Card3,
      description: "Dawn Coston - Colorado Nurse Practitioner",
      scopeId: "153bd7d5-bb4a-4a78-871f-e888c7d3da14",
      scopeUrl: "dawn-coston6627",
      applicationId:
        "7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b",
    },
  ];

  return (
    <>
      <div className="card-container4">
        {cardsData.map(
          (card, index) => (
            console.log("Card", card),
            (
              <AppoinmentCard
                key={index}
                imageUrl={card.imageUrl}
                description={card.description}
                scopeId={card.scopeId}
                scopeUrl={card.scopeUrl}
                applicationId={card.applicationId}
              />
            )
          )
        )}
      </div>
      <div className="coming-soon-container">
        <p className="coming-soon-text">Coming soon....</p>
        <p className="coming-soon-subtext">Stay tuned for the Robard e-store</p>
      </div>
    </>
  );
};

export default AppoinmentCards;
