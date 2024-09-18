import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Timeline from './components/Timeline';
//import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      <Route path ='/project' element={<Project />} />
        <Route path="/timeline" element={<Timeline />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;