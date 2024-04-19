import React from 'react';
import './Cards.css'; 
import card1 from '../../Assets/Image/card1-img1.webp';
import Card2 from '../../Assets/Image/card1-img2.webp';
import Card3 from '../../Assets/Image/card1-img3.webp';
import { useNavigate } from 'react-router-dom';

const Card = ({ imageUrl, description, linkUrl  }) => {

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/ourpage')
  };

  return (
    <div className="card2">
      <div className="card-content">
        <div className="card-image2">
          <img src={imageUrl} alt="Card" />
        </div>
        <div className="card-description2">
          <p>{description}</p>
          <button className="card-button2" onClick={handleButtonClick}>Learn More</button>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardsData = [
    {
      imageUrl: card1,
      description: 'Compound Semaglutide weight Loss Program',
      linkUrl: 'https://example.com/page1',
    },
    {
      imageUrl: Card2,
      description: 'Meal Replacement Program',
      linkUrl: 'https://example.com/page1',
    },
    {
      imageUrl: Card3,
      description: 'Managed weightloss program',
      linkUrl: 'https://example.com/page1',
    },
  ];

  const firstRowCards = cardsData.slice(0, 2);
  const secondRowCards = cardsData.slice(2);

  return (
    <div>
      <div className='card-container2'>
        <h2 style={{fontSize:'50px', color:'rgb(9,55,31)'}}>Our Services</h2>
      </div>
      <div className="card-container2">
        {firstRowCards.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} description={card.description} />
        ))}
      </div>
      <div className="card-container2">
        {secondRowCards.map((card, index) => (
          <Card key={index + 2} imageUrl={card.imageUrl} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
