import style from '../about/AboutContent.module.css';
import React from 'react';

const AboutContent = () => {
  return (
    <div className={style['about-container']}>
      <div className={style['left-content']}>
        <h1>About me</h1>
        <p>
          I'm a Frontend Developer with a Master's in Computer Science,
          specializing in HTML, CSS, JavaScript, and React. My focus is on
          creating accessible, responsive, and visually captivating designs that
          seamlessly adapt to various devices. With a keen eye for detail and a
          passion for user-centric experiences, I merge technology and
          creativity to craft seamless and engaging web interfaces. Let's bring
          your ideas to life through innovative design and impeccable code.
        </p>
      </div>
      <div className="right-content"></div>
    </div>
  );
};

export default AboutContent;
