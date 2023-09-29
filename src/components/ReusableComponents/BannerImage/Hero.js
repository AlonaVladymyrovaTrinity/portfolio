import React, { useState } from 'react';
import './Hero.css';
// import Gradient from './Gradient';

function Hero({ title, caption }) {
  //   useEffect(() => {
  //     const gradient = new Gradient();
  //     gradient.initGradient('#gradient-canvas');

  //     // Optionally, you can return a cleanup function if needed
  //     return () => {
  //       // Clean up any resources or event listeners here if necessary
  //     };
  //   }, []);

  const [gradientColors, setGradientColors] = useState({
    colorZero: '#a960ee',
    colorOne: '#ff333d',
    colorTwo: '#90e0ff',
    colorThree: '#ffcb57',
  });

  const handleColorChange = () => {
    // Generate random colors (you can replace this logic as needed)
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
  //   console.log(gradientColors.colorZero);

  return (
    <div
      className="HomepageHeroGradient"
      style={{
        '--gradientColorZero': gradientColors.colorZero,
        '--gradientColorOne': gradientColors.colorOne,
        '--gradientColorTwo': gradientColors.colorTwo,
        '--gradientColorThree': gradientColors.colorThree,
      }}
    >
      <div className="Gradient">
        <canvas className="Gradient__canvas" id="gradient-canvas"></canvas>
        <div className="Gradient__guides"></div>
      </div>
      <div className="HomepageHeroHeader">
        <div className="HomepageHeroHeader__title">{title}</div>
        <div className="HomepageHeroHeader__caption">{caption}</div>
      </div>
      <button onClick={handleColorChange}>Change Colors</button>
    </div>
  );
}

export default Hero;
