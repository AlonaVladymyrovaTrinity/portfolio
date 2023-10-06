import React, { useState, useEffect } from 'react';
import './Hero.css';
import { Gradient } from 'whatamesh';
import Waves from './Waves';

function Hero({ title, caption }) {
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

  const handleColorChange = () => {
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
        <button onClick={handleColorChange}>Change Colors</button>
      </div>
    </>
  );
}

export default Hero;
