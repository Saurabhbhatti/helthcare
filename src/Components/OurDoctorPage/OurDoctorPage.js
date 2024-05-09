import React, { useState } from 'react';
import HomeImage from '../../Assets/Image/Home-banner.jpg';
import '../OurDoctorPage/OurDoctorPage.css';
import Header from '../Header/Header';
import Paragraph from '../Paragraph1/Paragraph';
import Card from '../Crad1/Card';
import Cards from '../Card2/Cards';
import Paragraphs from '../Paragraph2/Paragraphs';
import AnchorCard from '../Card3/AnchorCard';
import Book from '../ImageText/Book';
import Faq from '../FAQ/Faq';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const OurDoctorPage = () => {
    const navigate = useNavigate();
    const [sliderVisible, setSliderVisible] = useState(false);

    const handleClick = () => {
        navigate('/appointments');
    }

    const handleSliderVisible = () => {
        setSliderVisible(true);
    }

    return (
        <>
            <Header />
            <div className={`Container ${sliderVisible ? 'slider-visible' : ''}`}>
                <div className='box-first'>
                    <h1 className='heading-bx-first'>
                        <span>
                            OTC BODY<br /> Your Partner for <br /> Healthier Living
                        </span>
                        <span style={{ display: 'block' }}>
                            <Button variant='contained' onClick={handleClick} style={{ backgroundColor: 'rgb(9 55 31)', borderRadius: '10px' }}>Book Now</Button>
                        </span>
                    </h1>
                </div>
                <div className='box-last'>
                    <img src={HomeImage} alt="Home-Banner.png" onLoad={handleSliderVisible} />
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
        </>

    );
}

export default OurDoctorPage;
