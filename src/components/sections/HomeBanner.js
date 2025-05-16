// src/components/sections/HomeBanner.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  // Pattern per lo sfondo (generato direttamente nel codice anziché usare via.placeholder)
  const patternBg = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <div className="relative z-10 bg-cover bg-center h-64 shadow-inner" 
         style={{
           background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
           backgroundImage: patternBg,
           backgroundBlendMode: 'overlay',
         }}> 
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/30">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">Pronti ad intervenire</h2>
            <p className="text-blue-100 text-lg mb-4 drop-shadow">Al servizio della comunità per la sicurezza del territorio</p>
            <Link to="/chi-siamo" className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-md shadow-md transition-colors duration-300 transform hover:scale-105">
              Scopri di più
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;