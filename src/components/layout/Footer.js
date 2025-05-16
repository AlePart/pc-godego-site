import React from 'react';
import { Link } from 'react-router-dom';
import SocialLinks from '../common/SocialLinks';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-12 pb-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white p-2 rounded-full">
                <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Protezione Civile</h3>
                <p className="text-gray-400 text-sm">Castello di Godego</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">Servizio volontario per la sicurezza della comunità e la gestione delle emergenze nel territorio di Castello di Godego.</p>
            <SocialLinks className="mb-4" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Collegamenti Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/allerta-meteo" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Allerta Meteo
                </Link>
              </li>
              <li>
                <Link to="/piano-emergenza" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Piano di Emergenza Comunale
                </Link>
              </li>
              <li>
                <Link to="/volontari" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Diventa Volontario
                </Link>
              </li>
              <li>
                <Link to="/formazione" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Formazione
                </Link>
              </li>
              <li>
                <Link to="/galleria" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  Galleria Foto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contattaci</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Indirizzo</p>
                  <p className="text-gray-300">Via Roma, 123<br/>Castello di Godego (TV)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Telefono</p>
                  <p className="text-gray-300">+39 0123 456789</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-gray-300">protcivile.godego@esempio.it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Protezione Civile Castello di Godego - Tutti i diritti riservati</p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Sito sviluppato da <a href="https://www.key-code.it" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">Key-Code</a> - 
                Progettazione e hosting concessi a titolo gratuito
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Nastro decorativo */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 mt-6"></div>
    </footer>
  );
};

export default Footer;