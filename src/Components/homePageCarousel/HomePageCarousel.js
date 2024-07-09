import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {
  HOME_SLIDER_SEMAGLUTIDE,
  OTC_ORAL_SEMAGLUTIDE,
  OTC_NAD_CREAM,
  OTC_WOMENS_RX,
  OTC_MENS_RX,
  OTC_COMPOUND_TZ,
  OTC_HAIR_TREATMENT,
  SEMAGLUTIDE_TRANDORM
} from '../../helper/assets';
import { sliderImage } from '../../helper/content';
import './HomePageCarousel.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const imageMap = {
  HOME_SLIDER_SEMAGLUTIDE,
  OTC_ORAL_SEMAGLUTIDE,
  OTC_NAD_CREAM,
  OTC_WOMENS_RX,
  OTC_MENS_RX,
  OTC_COMPOUND_TZ,
  OTC_HAIR_TREATMENT,
  SEMAGLUTIDE_TRANDORM
};

const HomePageCarousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className='home-page-carousel'>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={9000} 
      >
        {sliderImage.map((slide, index) => (
          <div key={slide.label}>
            {Math.abs(activeStep - index) <= 2 && (
              <Box
                component='img'
                className='carousel-image'
                src={imageMap[slide.imgPath]}
                alt={slide.label}
              />
            )}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default HomePageCarousel;
