import React from 'react';
import Projects from '../components/Projects/Projects';
import Hero from '../components/ReusableComponents/Hero/Hero';

const Project = () => {
  return (
    <>
      <Hero title="PROJECTS" caption="Some of my recent works" />
      <Projects />
    </>
  );
};

export default Project;
