import React from 'react';
import HomeImage from '../../Assets/Image/Home.jpg';
import '../OurDoctorPage/OurDoctorPage.css';
import Header from '../Header/Header'
import Paragraph from '../Paragraph1/Paragraph';
import Card from '../Crad1/Card';
import Cards from '../Card2/Cards';
import Paragraphs from '../Paragraph2/Paragraphs';
import AnchorCard from '../Card3/AnchorCard';
import Book from '../ImageText/Book';
import JoinUs from '../JoinUs/JoinUs'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const OurDoctorPage = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/appointments')
    }
    return (
        <>
            <Header />
            <div className='Container'>
                <div className='box-first'>
                    <h1 style={{ fontSize: '60px' }}>
                        <span>
                            Off the Charts:<br /> Your Partner for <br /> Healthier Living
                        </span>
                        <span className='spwidget-button-wrapper' style={{ display: 'block' }}>
                            <Button variant='contained' onClick={handleClick}>Book Now</Button>
                        </span>
                    </h1>

                </div>
                <div className='box-middle'>

                </div>
                <div className='box-last'>
                    <img src={HomeImage} alt="Home.jpg" />
                </div>
            </div >
            <Paragraph/>
            <Card />
            <Cards />
            <Paragraphs/>
            <Book />
            <AnchorCard />
            <JoinUs />
            <Footer />
        </>

    );
}

export default OurDoctorPage;
