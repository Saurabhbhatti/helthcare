import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { sliderImage } from '../../helper/content';
import './HomePageCarousel.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const HomePageCarousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box className='home-page-carousel'>
      <AutoPlaySwipeableViews
        className='home-page-slider'
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {sliderImage.map((slide, index) => (
          <div key={slide.label}>
            {Math.abs(activeStep - index) <= 2 && (
              <Box
                component='img'
                className='carousel-image'
                src={slide.imgPath}
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
