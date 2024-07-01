import React, { useState } from 'react';
import style from './Footer.module.css';
import {
  OTC_NEW_LOGO,
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
} from '../../helper/assets';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={style.mainfooter}>
      <div className={style.footerflex}>
        <div className={style.footerTop}>
          <div className={style.footerFlexContent}>
            <ul className={style.footerUL}>
              <li>
                <b style={{ fontSize: '18px' }}>Email</b>
              </li>
              <li>@ 2024 by OTC body</li>
            </ul>
          </div>

          <div className={style.footerOCTLogo}>
            <img
              src={OTC_NEW_LOGO}
              alt='logo'
              className='logo'
              width='180'
              height='100'
              loading='lazy'
            />
            <div className={style.footerLogoText}>
              Division of Fit Body Faster
            </div>
          </div>
          <div className={style.footerFlexContent}>
            <ul className={style.footerUL}>
              <li>
                <b style={{ fontSize: '18px' }}>Contacts</b>
              </li>
              <li>
                <a className={style.emailLink}>702-670-1630</a>
              </li>
              <li>
                <a href='mailto:info@otcbody.com' className={style.emailLink}>
                  info@otcbody.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footerSocialFlexContent}>
          <ul className={style.footerSocialLinks}>
            <li className={style.footerSocialLink}>
              <img
                src={Facebook}
                alt='facebook'
                width={'28px'}
                height={'28px'}
              />
              <a href='https://www.facebook.com/profile.php?id=61558525813461'>
                Facebook
              </a>
            </li>
            <li className={style.footerSocialLink}>
              <img
                src={Pinterest}
                alt='facebook'
                width={'28px'}
                height={'28px'}
              />
              <a href='#'>Pinterest</a>
            </li>
            <li className={style.footerSocialLink}>
              <img
                src={LinkedIn}
                alt='facebook'
                width={'28px'}
                height={'28px'}
              />
              <a href='#'>LinkedIn</a>
            </li>
            <li className={style.footerSocialLink}>
              <img
                src={Instagram}
                alt='facebook'
                width={'28px'}
                height={'28px'}
              />
              <a href='https://www.instagram.com/otc_bodyfitness/'>Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
