import style from "./Footer.module.css";
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className={style.mainfooter}>
      <div className={style.footerflex}>
        <div>
          <p className={style.para}>
            <h1>OTC Body</h1>
          </p>
          <p className={style.paratext}>
            <span>
            Division of Fit Body Faster
            </span>
          </p>
          <div style={{ paddingLeft: '15px', paddingRight: '15px' }}> 
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              fullWidth 
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }} />
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={{ backgroundColor: 'yellow', color: 'black', marginTop: '10px', width: '100%', borderRadius: '50px' }} >Send</Button> {/* Adjusted styling */}
          </div>
          <div>
            <p className={style.paratext} style={{ paddingTop: "20px" }}>
              © 2024 by OTC Body.
            </p>
          </div>
        </div>

        
        <div className={style.footerFlexContent}>
          <ul className={style.footerUL}>
            <span style={{ fontSize: '18px', color: 'white' }}><b>Social</b></span>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61558525813461">Facebook</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/otc_bodyfitness/">Instagram</a>
            </li>
          </ul>
        </div>

        <div className={style.footerFlexContent}>
          <ul className={style.footerUL}>
            <span style={{ fontSize: '18px', color: 'white' }}><b>Contacts</b></span>
            <li style={{ color: 'white' }}>
              <span><b>info@otcbody.com</b></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

