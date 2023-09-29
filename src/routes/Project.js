import React from 'react';
// import BannerImage from '../components/ReusableComponents/BannerImage/BannerImage';
import Projects from '../components/Projects/Projects';
import Hero from '../components/ReusableComponents/BannerImage/Hero';

const Project = () => {
  return (
    <div>
      {/* <BannerImage heading="PROJECTS" text="Some of my recent works" /> */}
      <Hero title="PROJECTS" caption="Some of my recent works" />
      <Projects />
    </div>
  );
};

export default Project;
