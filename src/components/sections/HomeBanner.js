import React from 'react';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <div className="relative z-10 bg-cover bg-center h-64 shadow-inner" 
         style={{backgroundImage: "url('https://via.placeholder.com/1920x400')"}}> 
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