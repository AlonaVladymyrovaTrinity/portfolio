import React from 'react';
import AboutPage from '../components/About/AboutPage';
// import BannerImage from '../components/ReusableComponents/BannerImage/BannerImage';
import Hero from '../components/ReusableComponents/BannerImage/Hero';

const About = () => {
  return (
    <div>
      {/* <BannerImage heading="ABOUT ME" text="I am a Font-End Developper" /> */}
      <Hero title="ABOUT ME" caption="I am a Font-End Developper" />
      <AboutPage />
    </div>
  );
};

export default About;
