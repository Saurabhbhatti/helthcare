import React from 'react';
import '../ImageText/Book.css';
import handmobile from '../../Assets/Image/Hand-mobile.jpeg';
import textimg1 from '../../Assets/Image/textimg1.jpg'
import textimg2 from '../../Assets/Image/textimg2.jpg'
import textimg3 from '../../Assets/Image/textimg3.jpg'

const Container = () => {
    return (
        <div className="containerbook">
            <div className="left">
                <img src={handmobile} alt="Your Image" />
            </div>
            <div className="text-container">
                <div className='img-text'>
                <img src={textimg1} alt="Image Description" width="50px" height="50px" style={{paddingRight:'60px', paddingTop:'20px'}}/>
                <div>
                    <h2><span>Initial Consultation</span></h2>
                    <p>"Kickstart your weight loss journey with <br/> Off the Charts in just three steps! Begin <br/> by scheduling a consultation to discuss <br/>  your goals and medical history." </p>
                </div>
                </div>
                <div className='img-text'>
                <img src={textimg2} alt="Image Description" width="50px" height="50px" style={{paddingRight:'30px', paddingTop:'20px'}}/>
                <div>
                    <h2><span>Personalized Treatment Plan</span></h2>
                    <p>Receive a personalized treatment plan <br/> including FDA-approved medications,<br/> telehealth consultations, and access to <br/>our renowned weight management <br/>programs. </p>
                </div>
                </div>
                <div className='img-text'>
                <img src={textimg3} alt="Image Description" width="50px" height="50px" style={{paddingRight:'30px', paddingTop:'20px'}}/>
                <div>
                    <h2><span>Implementation and Support</span></h2>
                    <p>Start seeing results after 30-60 days,<br/> supported by evidence-based <br/>protocols, nutritional guides, and as<br/> needed support from our experienced <br/>team </p>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Container;
