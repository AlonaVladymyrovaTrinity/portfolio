import React from 'react';
import AboutPage from '../components/About/AboutPage';
import Footer from '../components/Footer/Footer';
import BannerImage from '../components/ReusableComponents/BannerImage/BannerImage';

const About = () => {
  return (
    <div>
      <BannerImage heading="ABOUT ME" text="I am a Font-End Developper" />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default About;
