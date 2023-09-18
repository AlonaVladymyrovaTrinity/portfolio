import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BannerImage from '../components/ReusableComponents/BannerImage/BannerImage';

const Project = () => {
  return (
    <div>
      <Navbar />
      <BannerImage heading="PROJECTS" text="Some of my recent works" />
      <Footer />
    </div>
  );
};

export default Project;
