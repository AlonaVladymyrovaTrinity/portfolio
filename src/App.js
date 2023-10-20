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

// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import Avatar from './components/Home/Avatar';
// import { OrbitControls } from '@react-three/drei';

// function App() {
//   return (

// <Canvas>
//   <ambientLight intensity={0.5} />
//   <pointLight position={[10, 10, 10]} />
//   <Avatar />
// </Canvas>

//     <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
//       <color attach="background" args={['#ececec']} />
//       <OrbitControls />
//       <group position-y={-1}>
//         <Avatar />
//       </group>
//       <ambientLight intensity={1} />
//     </Canvas>
//   );
// }
// export default App;
