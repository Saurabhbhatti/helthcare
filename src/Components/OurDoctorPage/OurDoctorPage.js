import React, { useEffect, useState } from 'react';
import HomeImage from '../../Assets/Image/Home.jpg';
import '../OurDoctorPage/OurDoctorPage.css';

const AppointmentRequestWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widget-cdn.simplepractice.com/assets/integration-1.0.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <>
            <style>{`
          .spwidget-button-wrapper {
            text-align: center;
          }
          .spwidget-button {
            display: inline-block;
            padding: 12px 24px;
            color: #fff !important;
            background: #DE6A26;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
          }
          .spwidget-button:hover {
            background: #D15913;
          }
          .spwidget-button:active {
            color: rgba(255, 255, 255, 0.75) !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) inset;
          }
        `}</style>
            <div className="spwidget-button-wrapper">
                <a
                    href="https://offthecharts.clientsecure.me"
                    className="spwidget-button"
                    data-spwidget-scope-id="f959f7a9-4627-4b2a-bf3b-f20305b7826c"
                    data-spwidget-scope-uri="offthecharts"
                    data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
                    data-spwidget-scope-global
                    data-spwidget-autobind
                >
                    Request Appointment
                </a>
            </div>
        </>
    );
};
const OurDoctorPage = () => {
    const [showWidget, setShowWidget] = useState(false);
    const handleButtonClick = () => {
        setShowWidget(true);
    };

    return (
        <div className='Container'>
            <div className='box-first'>
                <h1 style={{ fontSize: '60px' }}>
                    <span>
                        Off the Charts:<br /> Your Partner for <br /> Healthier Living
                    </span>
                    <span className='spwidget-button-wrapper' style={{ display: 'block' }}>
                        <AppointmentRequestWidget />
                    </span>
                    <script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script>
                </h1>

            </div>
            <div className='box-middle'>

            </div>
            <div className='box-last'>
                <img src={HomeImage} alt="Home.jpg" />
            </div>
        </div >
    );
}

export default OurDoctorPage;
