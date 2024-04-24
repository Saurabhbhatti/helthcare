import React from "react";
import "./Cards.css";
import card1 from "../../Assets/Image/card1-img1.webp";
import Card2 from "../../Assets/Image/card1-img2.webp";
import Card3 from "../../Assets/Image/card1-img3.webp";
import { useNavigate } from "react-router-dom";

const Card = ({ imageUrl, description, secondDescription }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/appointments");
  };

  return (
    <div className="card2">
      <div className="card-content">
        <div className="card-image2">
          <img src={imageUrl} alt="Card" />
        </div>
        <div className="card-description2">
          <p style={{fontSize:'18px'}}>{description}</p>
          <p style={{fontSize:'14px'}}>{secondDescription}</p>
          <button className="card-button2" onClick={handleButtonClick}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardsData = [
    {
      imageUrl: card1,
      description: "Compound Semaglutide weight Loss Program",
      secondDescription:
        "Experience our Compound Semaglutide Weight Loss Program - a comprehensive, personalized service integrating medication, nutrition counseling, exercise guidance, and ongoing support for effective and sustainable weight loss."
    },
    {
      imageUrl: Card2,
      description: "Meal Replacement Program",
      secondDescription:
        "Revitalize with our Meal Replacement Program - a convenient, nutritious solution featuring balanced meals, expert guidance, and continuous monitoring for successful weight management and improved well-being."
    },
    {
      imageUrl: Card3,
      description: "Managed weightloss program",
      secondDescription:
        "Embark on our Managed Weight Loss Program - a tailored journey combining medical supervision, personalized nutrition plans, fitness strategies, and ongoing support for achieving your weight goals effectively and sustainably.",
    },
  ];

  const firstRowCards = cardsData.slice(0, 2);
  const secondRowCards = cardsData.slice(2);

  return (
    <div>
      <div className="card-container2">
        <h2 style={{ fontSize: "40px", color: "rgb(9,55,31)" }}>
          Our Services
        </h2>
      </div>
      <div className="card-container2">
        {firstRowCards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            description={card.description}
            secondDescription={card.secondDescription}
          />
        ))}
      </div>
      <div className="card-container2">
        {secondRowCards.map((card, index) => (
          <Card
            key={index + 2}
            imageUrl={card.imageUrl}
            description={card.description}
            secondDescription={card.secondDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
