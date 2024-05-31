import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import style from "./Footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={style.mainfooter}>
      <div className={style.footerflex}>
        <div>
          <h1 className={style.para}>OTC Body</h1>
          <p className={style.paratext}>Division of Fit Body Faster</p>
          <form onSubmit={handleSubmit} style={{ padding: "0 15px" }}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{ style: { color: "white" } }}
              InputLabelProps={{ style: { color: "white" } }}
              aria-label="email"
            />
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "yellow",
                color: "black",
                marginTop: "10px",
                width: "100%",
                borderRadius: "50px",
              }}
            >
              Send
            </Button>
          </form>
          <p className={style.paratext} style={{ paddingTop: "20px" }}>
            © 2024 by OTC Body.
          </p>
        </div>

        <div className={style.footerFlexContent}>
          <ul className={style.footerUL}>
            <li>
              <b style={{ fontSize: "18px", color: "white" }}>Social</b>
            </li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61558525813461">
                Facebook
              </a>
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
            <li>
              <b style={{ fontSize: "18px", color: "white" }}>Contacts</b>
            </li>
            <li>
              <a href="mailto:info@otcbody.com" className={style.emailLink}>
                info@otcbody.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
