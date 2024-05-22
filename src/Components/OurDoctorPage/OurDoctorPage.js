import React, { useState, Suspense, useEffect } from 'react';
import HomeImage from '../../Assets/Image/Home-banner.jpg';
import '../OurDoctorPage/OurDoctorPage.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

// Lazy load components
const Header = React.lazy(() => import('../Header/Header'));
const Paragraph = React.lazy(() => import('../Paragraph1/Paragraph'));
const Card = React.lazy(() => import('../Crad1/Card'));
const Cards = React.lazy(() => import('../Card2/Cards'));
const Paragraphs = React.lazy(() => import('../Paragraph2/Paragraphs'));
const AnchorCard = React.lazy(() => import('../Card3/AnchorCard'));
const Book = React.lazy(() => import('../ImageText/Book'));
const Faq = React.lazy(() => import('../FAQ/Faq'));
const Footer = React.lazy(() => import('../Footer/Footer'));

const OurDoctorPage = () => {
    const navigate = useNavigate();
    const [sliderVisible, setSliderVisible] = useState(false);

    const handleClick = () => {
        navigate('/appointments');
    }

    const handleSliderVisible = () => {
        const img = new Image();
        img.src = HomeImage;
        img.onload = () => setSliderVisible(true);
    }

    useEffect(() => {
        handleSliderVisible();
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <div className={`Container ${sliderVisible ? 'slider-visible' : ''}`}>
                <div className='box-first'>
                    <h1>
                        <span className='heading-bx-first'>
                            OTC BODY<br /> Your Partner for <br /> Healthier Living
                        </span>
                        <span style={{ display: 'block' }}>
                            <Button variant='contained' onClick={handleClick} style={{ backgroundColor: 'rgb(9 55 31)', borderRadius: '10px' }}>Book Now</Button>
                        </span>
                    </h1>
                </div>
                <div className='box-last'>
                    <img src={HomeImage} alt="Home-Banner.png" width="1200px" height="600px"/>
                </div>
            </div>
            <Paragraph />
            <Card />
            <Cards />
            <Paragraphs />
            <Book />
            <AnchorCard />
            <Faq />
            <Footer />
        </Suspense>
    );
    
}



export default OurDoctorPage;
