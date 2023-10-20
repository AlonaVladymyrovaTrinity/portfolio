import React from 'react';
import HomePage from '../components/Home/HomePage';
import Hero from '../components/ReusableComponents/Hero/Hero';

const Home = () => {
  return (
    <>
      <Hero title="Portfolio" caption="Front-end Web Developer" />
      <HomePage />
    </>
  );
};

export default Home;
