import React from 'react';
import mobile from '../../Assets/Image/mobile-photo.png';
import googleplay from '../../Assets/Image/googleplay.webp';
import './JoinUs.css';
import applestore from '../../Assets/Image/applestore.webp';
import scanner from '../../Assets/Image/scanner.svg';

const HoverPara = () => {
  return (
    <div className="us-component">
      <div className="container">
        <div className="image-container">
          <img src={mobile} alt="Mobile phone displaying the Spaces by Wix app" width="204px" height="415px" />
        </div>
        <div className="content-container">
          <h1 style={{ fontSize: '50px', paddingRight: '50px' }}>Join us on mobile!</h1>
          <span>
            Download the Spaces by Wix app and join “Off The Charts Body” to <br />easily stay updated on the go.
          </span>
          <div className="button-container">
            <span>
              <img src={scanner} alt='QR code scanner icon' style={{ paddingRight: '30px' }} />
            </span>
            <a href='https://play.google.com/store' target="_blank" rel="noopener noreferrer"><img src={googleplay} alt='Google Play' width="144px" height="43px" style={{ paddingBottom: '30px'}} /></a>
            <a href='https://www.apple.com/app-store/' target="_blank" rel="noopener noreferrer"><img src={applestore} alt='App Store' width="144px" height="43px" style={{ paddingBottom: '30px', paddingLeft:'10px' }} /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverPara;
