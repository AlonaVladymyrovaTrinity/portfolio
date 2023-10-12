import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Gradient } from 'whatamesh';
import Waves from './Waves';
import iconImg from '../../../assets/color-palette_2.png';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Hero({ title, caption }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const [gradientColors, setGradientColors] = useState({
    colorZero: '#a960ee',
    colorOne: '#ff333d',
    colorTwo: '#90e0ff',
    colorThree: '#ffcb57',
  });

  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('#gradient-canvas');
  }, [gradientColors]);

  useEffect(() => {
    setTooltipOpen(true);
    setTimeout(() => setTooltipOpen(false), 2000);
  }, []);

  const handleColorChange = () => {
    setTooltipOpen(false);
    // Generate random colors
    const newColors = {
      colorZero: getRandomColor(),
      colorOne: getRandomColor(),
      colorTwo: getRandomColor(),
      colorThree: getRandomColor(),
    };

    setGradientColors(newColors);
  };

  const getRandomColor = () => {
    // Generate a random color in hexadecimal format
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <>
      <div className="HomepageHeroGradient">
        <div className="HomepageHeroHeader">
          {/*Text*/}
          <div className="HomepageHeroHeader__title">{title}</div>
          <div className="HomepageHeroHeader__caption">{caption}</div>
          {/* Tooltip */}
        </div>
        <div className="EmptyBox1"></div>
        <div className="EmptyBox2"></div>
        <div className="EmptyBox3"></div>
        <div className="ChangeColorsButton">
          <Tooltip
            title="Change Colors"
            // enterDelay={1000}
            arrow
            open={tooltipOpen}
          >
            <IconButton
              onClick={handleColorChange}
              aria-label="Change Colors" // ARIA label for accessibility
              onMouseEnter={() => {
                setTimeout(() => setTooltipOpen(true), 800); // Set the delay here
              }}
              onMouseLeave={() => setTooltipOpen(false)}
              //title="Change Colors" // title attribute
            >
              <img
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                }}
                src={iconImg} // Ppath to icon
                alt="Change Colors Icon" // Alt text for accessibility
              />
            </IconButton>
          </Tooltip>
        </div>
        <div className="Gradient">
          {/*Canvas*/}
          <canvas
            className="Gradient__canvas"
            id="gradient-canvas"
            style={{
              '--gradient-color-1': gradientColors.colorZero,
              '--gradient-color-2': gradientColors.colorOne,
              '--gradient-color-3': gradientColors.colorTwo,
              '--gradient-color-4': gradientColors.colorThree,
            }}
          ></canvas>
          {/* ---Wawe start--- */}
          <div className="waves-container">
            <Waves className="waves" />
          </div>
          {/* ---Wave end--- */}
        </div>
      </div>
    </>
  );
}

export default Hero;
