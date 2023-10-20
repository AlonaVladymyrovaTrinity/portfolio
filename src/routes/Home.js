import React from 'react';
import HomePage from '../components/Home/HomePage';
import Hero from '../components/ReusableComponents/Hero/Hero';

const Home = () => {
  return (
    <>
      <Hero title="Front-end" caption=" Web developer portfolio" />
      <HomePage />
    </>
  );
};

export default Home;
