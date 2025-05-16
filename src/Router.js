import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

// Pagine
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Contact from './pages/Contact';

// Componente AppRouter che contiene le rotte
export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chi-siamo" element={<About />} />
      <Route path="/attivita" element={<Activities />} />
      <Route path="/contatti" element={<Contact />} />
      
      {/* Gestione fallback per gli URL non definiti */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

// Componente Router che utilizza HashRouter per GitHub Pages
export const Router = ({ children }) => {
  return (
    <HashRouter>
      {children}
    </HashRouter>
  );
};