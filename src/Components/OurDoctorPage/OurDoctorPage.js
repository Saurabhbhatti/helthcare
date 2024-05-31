import React, { useState, Suspense, useEffect } from "react";
import HomeImage from "../../Assets/Image/Home-banner.jpg";
import "../OurDoctorPage/OurDoctorPage.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { lazy } from "react";

const Header = lazy(() => import("../Header/Header"));
const Paragraph = lazy(() => import("../Paragraph1/Paragraph"));
const Card = lazy(() => import("../Crad1/Card"));
const Cards = lazy(() => import("../Card2/Cards"));
const Paragraphs = lazy(() => import("../Paragraph2/Paragraphs"));
const AnchorCard = lazy(() => import("../Card3/AnchorCard"));
const Book = lazy(() => import("../ImageText/Book"));
const Faq = lazy(() => import("../FAQ/Faq"));
const Footer = lazy(() => import("../Footer/Footer"));

const OurDoctorPage = () => {
  const navigate = useNavigate();
  const [sliderVisible, setSliderVisible] = useState(false);

  const handleClick = () => {
    navigate("/appointments");
  };

  const handleSliderVisible = () => {
    const img = new Image();
    img.src = HomeImage;
    img.onload = () => setSliderVisible(true);
  };

  useEffect(() => {
    handleSliderVisible();
  }, []);

  return (
    <Suspense fallback={<div></div>}>
      <Header />
      <div className={`Container ${sliderVisible ? "slider-visible" : ""}`}>
        <div className="box-first">
          <h1>
            <span className="heading-bx-first">
              OTC BODY
              <br /> Your Partner for <br /> Healthier Living
            </span>
            <span style={{ display: "block" }}>
              <Button
                variant="contained"
                onClick={handleClick}
                style={{
                  backgroundColor: "rgb(9 55 31)",
                  borderRadius: "10px",
                }}
              >
                Book Now
              </Button>
            </span>
          </h1>
        </div>
        <div className="box-last">
          <img
            src={HomeImage}
            alt="Home-Banner"
            width="1200"
            height="600"
            loading="lazy"
          />
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
};

export default OurDoctorPage;
