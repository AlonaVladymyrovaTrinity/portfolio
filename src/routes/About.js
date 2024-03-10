import React from 'react';
import AboutPage from '../components/About/AboutPage';
import Hero from '../components/ReusableComponents/Hero/Hero';

const About = () => {
  return (
    <>
      <Hero title="ABOUT ME" caption="I am a Front-End Developer" />
      <AboutPage />
    </>
  );
};

export default About;
