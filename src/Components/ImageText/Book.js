import React from 'react';
import '../ImageText/Book.css';
import handmobile from '../../Assets/Image/Hand-mobile.jpeg'

const Container = () => {
    return (
        <div className="containerbook">
            <div className="left">
                <img src={handmobile} alt="Your Image"/>
            </div>
            <div className="right">
                <h2>Initial Consultation</h2>
                <p className='bookpara'>"Kickstart your weight loss journey with <br/> Off the Charts in just three steps! Begin <br/> by scheduling a consultation to discuss <br/>  your goals and medical history." </p>
                <h2>Personalized Treatment Plan</h2>
                <p>Receive a personalized treatment plan <br/> including FDA-approved medications, <br/> telehealth consultations, and access to <br/>our renowned weight management programs.</p>
                <h2>Implementation and Support</h2>
                <p>Start seeing results after 30-60 days,<br/> supported by evidence-based <br/>protocols, nutritional guides, and as<br/> needed support from our experienced team. </p>
            </div>
        </div>
    );
}

export default Container;
