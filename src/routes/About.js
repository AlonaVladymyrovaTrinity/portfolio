import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import AboutPage from '../components/About/AboutPage';
import Footer from '../components/Footer/Footer';
import BannerImage from '../components/ReusableComponents/BannerImage/BannerImage';

const About = () => {
  return (
    <div>
      <Navbar />
      <BannerImage heading="ABOUT ME" text="I am a Font-End Developper" />
      <AboutPage />
      <Footer />
    </div>
  );
};

export default About;
