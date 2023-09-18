import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BannerImage from '../components/ReusableComponents/BannerImage/BannerImage';
import Projects from '../components/Projects/Projects';

const Project = () => {
  return (
    <div>
      <Navbar />
      <BannerImage heading="PROJECTS" text="Some of my recent works" />
      <Projects />
      <Footer />
    </div>
  );
};

export default Project;
