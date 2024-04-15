import React from 'react';
import './Cards.css'; 
import card1 from '../../Assets/Image/card1-img1.webp';
import Card2 from '../../Assets/Image/card1-img2.webp';
import Card3 from '../../Assets/Image/card1-img3.webp';
import Card4 from '../../Assets/Image/card1-img4.webp';

const Card = ({ imageUrl, description }) => {
  return (
    <div className="card2">
      <div className="card-image2">
        <img src={imageUrl} alt="Card" />
      </div>
      <div className="card-description2">
        <p>{description}</p>
        <button className="card-button2">Learn More</button>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardsData = [
    {
      imageUrl: card1,
      description: 'Describe one of your services',
    },
    {
      imageUrl: Card2,
      description: 'Describe one of your services',
    },
    {
      imageUrl: Card3,
      description: 'Describe one of your services',
    },
    {
      imageUrl: Card4,
      description: 'Describe one of your services',
    },
  ];

  return (
    <div className="card-container2">
      {cardsData.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} description={card.description} />
      ))}
    </div>
  );
};

export default Cards;
