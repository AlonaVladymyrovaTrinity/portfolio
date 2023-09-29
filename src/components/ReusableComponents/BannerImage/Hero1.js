import React from 'react';

const Hero = () => {
  const gradientStyle = {
    overflow: 'hidden',
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '40vh',
  };

  const canvasStyle = {
    position: 'relative',
    display: 'block',
    width: 'inherit',
    height: '100%',
    opacity: 1,
    transition: 'opacity 1.8s ease-in 50ms',
  };

  const gradientAfterStyle = {
    content: '""',
    zIndex: -1,
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    minWidth: '1000px',
    width: '100%',
    height: '100%',
    background:
      'radial-gradient(var(--gradientColorZero) 40%,var(--gradientColorTwoTransparent) 60%) -620px -180px no-repeat,' +
      'radial-gradient(var(--gradientColorThree) 33%,var(--gradientColorThreeTransparent) 67%) -120px -24px no-repeat,' +
      'radial-gradient(var(--gradientColorTwo) 40%,var(--gradientColorTwoTransparent) 70%) -470px 150px no-repeat,' +
      'var(--gradientColorZero)',
  };

  return (
    <>
      <div className="Gradient" style={gradientStyle}>
        <div className="Gradient__canvas isLoaded" style={canvasStyle}>
          Your hero content goes here
        </div>
        <div className="Gradient" style={gradientAfterStyle}></div>
      </div>
    </>
  );
};

export default Hero;
