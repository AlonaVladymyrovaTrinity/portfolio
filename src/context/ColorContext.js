import React, { createContext, useContext, useState } from 'react';

const ColorContext = createContext();

export const useColorContext = () => {
  return useContext(ColorContext);
};

export const ColorProvider = ({ children }) => {
  const [gradientColors, setGradientColors] = useState({
    colorZero: '#ff333d',
    colorOne: '#c81ee8',
    colorTwo: '#42c1f9',
    colorThree: '#ffcb57',
  });

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
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <ColorContext.Provider value={{ gradientColors, handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};
