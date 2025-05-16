// src/components/common/AlertBanner.js
import React from 'react';
import { Link } from 'react-router-dom';
import AlertBadge from '../alerts/AlertBadge';

const AlertBanner = ({ level = 'green', message = 'Nessuna allerta in corso' }) => {
  const alertLevels = {
    red: {
      description: 'Allerta di livello elevato. Condizioni meteorologiche molto pericolose.'
    },
    orange: {
      description: 'Allerta di livello moderato. Condizioni meteorologiche potenzialmente pericolose.'
    },
    yellow: {
      description: 'Allerta di livello ordinario. Prestare attenzione.'
    },
    green: {
      description: 'Attualmente non ci sono allerte meteo in corso per il nostro territorio.'
    }
  };

  const currentAlert = alertLevels[level] || alertLevels.green;
  const customMessage = message || currentAlert.description;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-100">
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 py-4 px-6">
        <h3 className="text-xl font-bold text-white flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Allerta Meteo
        </h3>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <AlertBadge level={level} size="md" />
        </div>
        <p className="text-gray-600 mb-4">{customMessage}</p>
        
        <div className="flex flex-wrap gap-2">
          <Link to="/allerte" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md px-4 py-2 inline-flex items-center transition-colors duration-200">
            Vedi tutte le allerte
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          {level !== 'green' && (
            <a href="tel:112" className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-md px-4 py-2 inline-flex items-center transition-colors duration-200">
              Emergenze: 112
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;