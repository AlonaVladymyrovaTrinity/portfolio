import React from 'react';
import About from './routes/About';
import Home from './routes/Home';
import Project from './routes/Project';
import Contact from './routes/Contact';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { ColorProvider } from './context/ColorContext';

function App() {
  return (
    <ColorProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ColorProvider>
  );
}

export default App;
