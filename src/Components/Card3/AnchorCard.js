import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Card3/AnchorCard.css'
import backgroundImage from '../../Assets/Image/sliderBackground.webp';

const SliderComponent = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...sliderSettings}>
            <div>
                <div className="card3">
                    <h2 className='headingslider'>Patient Stories</h2>
                    <div className="upper-content">
                        <p className='paragraphslider'>“I'm a testimonial. Click to edit me and add text <br /> that says something nice about you and your <br /> services. Let your customers review you and tell <br /> their friends how great you are.”</p>
                    </div>
                    <div className="lower-content">
                        <p>Jackie, 27</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card3">
                    <h2 className='headingslider'>Patient Stories</h2>
                    <div className="upper-content">
                        <p className='paragraphslider'>“I'm a testimonial. Click to edit me and add text <br/>that says something nice about you and your <br/>services.”</p>
                    </div>
                    <div className="lower-content">
                        <p>Adam, 32</p>
                    </div>
                </div>
            </div>

            <div>
                <div className="card3">
                    <h2 className='headingslider'>Patient Stories</h2>
                    <div className="upper-content">
                        <p className='paragraphslider'>“I'm a testimonial. Click to edit me and add text <br /> that says something nice about you and your <br /> services. Let your customers review you and tell <br /> their friends how great you are.”</p>
                    </div>
                    <div className="lower-content">
                        <p>Carly, 48</p>
                    </div>
                </div>
            </div>

        </Slider>
    );
};

const App = () => {
    return (
        <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <SliderComponent />
        </div>
    );
};

export default App;
