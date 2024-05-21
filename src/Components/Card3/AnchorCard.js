import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Card3/AnchorCard.css";
import backgroundImage from "../../Assets/Image/sliderBackground.jpg";

const SliderComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: dots => (
      <div className="custom-dots">
        <ul style={{ margin: "0" }}>{dots}</ul>
      </div>
    )
  };

  return (
    <Slider {...sliderSettings}>
      <div>
        <div className="card3">
          <h2 className="headingslider">Patient Stories</h2>
          <div className="upper-content">
            <p className="paragraphslider">
              “After struggling with yo-yo weight loss plans for years, I
              finally found my answer with this program. The weekly injection
              has turned off all the food noise that filled my head. I eat
              healthy, just not as much, and occasionally cheat, but the weight
              has stayed off.”
            </p>
          </div>
          <div className="lower-content">
            <p>Angie K</p>
          </div>
        </div>
      </div>
      <div>
        <div className="card3">
          <h2 className="headingslider">Patient Stories</h2>
          <div className="upper-content">
            <p className="paragraphslider">
              “My experience was very good. Dr Schube addressed all my questions
              and was very responsive when going through the process. Overall I
              would highly recommend his service.”
            </p>
          </div>
          <div className="lower-content">
            <p>Sherita C</p>
          </div>
        </div>
      </div>

      <div>
        <div className="card3">
          <h2 className="headingslider">Patient Stories</h2>
          <div className="upper-content">
            <p className="paragraphslider">
              “I have been pleased with my experience (and results!) with Fit
              Body Faster. They have helped me customize my dosage to meet my
              results and lose weight at what I feel is a sustainable rate. The
              doctors are responsive and available whenever I need them. I have
              and will continue to recommend friends to Fit Body Faster!”
            </p>
          </div>
          <div className="lower-content">
            <p>Abi C</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

const App = () => {
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <SliderComponent />
    </div>
  );
};

export default App;
