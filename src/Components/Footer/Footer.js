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
            <h1>Network MD</h1>
          </p>
          <p className={style.paratext}>
            <span>
              Network MD For our latest health tips and tricks <br />
              subscribe below
            </span>
          </p>
          <div style={{ paddingLeft: '15px', paddingRight: '15px' }}> {/* Adjusted padding */}
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              fullWidth // Take full width
              inputProps={{ style: { color: 'white' } }}
              InputLabelProps={{ style: { color: 'white' } }} />
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={{ backgroundColor: 'yellow', color: 'black', marginTop: '10px', width: '100%', borderRadius: '50px' }} >Send</Button> {/* Adjusted styling */}
          </div>
          <div>
            <p className={style.paratext} style={{ paddingTop: "20px" }}> {/* Adjusted padding */}
              © 2035 by Network MD.
              <br />
              Powered and secured by Wix
            </p>
          </div>
        </div>

        <div className={style.footerFlexContentPad}>
          <ul className={`${style.footerUL} `}>
            <span style={{ fontSize: '18px', color: 'white' }}><b>Menu</b></span>
            <li>
              <a href="#">Our Doctors</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <a href="#">Book a Session</a>
            </li>
          </ul>
        </div>

        <div className={style.footerFlexContent}>
          <ul className={style.footerUL}>
            <span style={{ fontSize: '18px', color: 'white' }}><b>Social</b></span>
            <li>
              <a href="">Facebook</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>

        <div className={style.footerFlexContent}>
          <ul className={style.footerUL}>
            <span style={{ fontSize: '18px', color: 'white' }}><b>Contacts</b></span>
            <li style={{ color: 'white' }}>
              <span>123-456-7890</span><br />
              <span><b>info@mysite.com</b></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

