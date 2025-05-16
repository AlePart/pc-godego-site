import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pagine
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Contact from './pages/Contact';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chi-siamo" element={<About />} />
      <Route path="/attivita" element={<Activities />} />
      <Route path="/contatti" element={<Contact />} />
    </Routes>
  );
};

export default AppRouter;