// src/components/layout/Header.js - Versione CORRETTA
import React from 'react';
import Navbar from './Navbar';
import AlertStatusBadge from '../alerts/AlertStatusBadge';

const Header = () => {
  return (
    <header className="relative z-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-lg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-blue-800 opacity-30"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '100px 100px'
             }}>
        </div>
      </div>
      <div className="container mx-auto p-6 flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md transform transition-transform duration-300 hover:scale-105">
            <svg className="w-12 h-12 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-md">Protezione Civile</h1>
            <h2 className="text-lg text-blue-100 italic">Castello di Godego</h2>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4">
          {/* Badge di stato delle allerte */}
          <AlertStatusBadge />
          
          {/* Menu di navigazione */}
          <Navbar />
        </div>
      </div>
      
      {/* Nastro decorativo */}
      <div className="h-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 shadow-inner"></div>
    </header>
  );
};

export default Header;