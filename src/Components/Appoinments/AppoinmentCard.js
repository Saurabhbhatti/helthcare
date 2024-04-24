import React from "react";
import "./Appoinment.css";
import card1 from "../../Assets/Image/img2.jpg";
import Card2 from "../../Assets/Image/img3.jpg";
import Card3 from "../../Assets/Image/img4.jpg";
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
        <img src={imageUrl} alt="Doc-img.jpg" />
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
      description: "For patients residing in Iowa,connect with Jaimee Ussery, Nurse Practitioner",
      scopeId: "7c019d46-6fb2-4a42-9d25-253151e62ac2",
      scopeUrl: "jaimee-ussery5125",
      applicationId:
        "7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b",
    },
    {
      imageUrl: Card2,
      description: "For patients residing in New Mexico,connect with Sandy Ndetah,Nurse Practitioner",
      scopeId: "b343f131-5bbc-4bb1-bfa4-15530b7fa1fe",
      scopeUrl: "sandy-ndetah",
      applicationId:
        "7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b",
    },
    {
      imageUrl: Card3,
      description: "For patients residing in Colorado,connect with dawn-coston,Nurse Practitioner",
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
