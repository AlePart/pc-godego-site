// src/components/common/AlertBanner.js
import React from 'react';
import { Link } from 'react-router-dom';
import AlertBadge from '../alerts/AlertBadge';
import { useAlerts } from '../../contexts/AlertContext';

const AlertBanner = () => {
  // Utilizzo del context delle allerte
  const { systemAlertLevel, getMainAlertMessage, activeAlerts } = useAlerts();
  
  // Descrizioni per i diversi livelli di allerta
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

  // Ottieni il messaggio personalizzato dall'allerta attiva più importante
  const message = getMainAlertMessage();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-orange-100">
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 py-4 px-6">
        <h3 className="text-xl font-bold text-white flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Allerta Meteo
          {activeAlerts.length > 0 && (
            <span className="ml-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {activeAlerts.length}
            </span>
          )}
        </h3>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <AlertBadge level={systemAlertLevel} size="md" />
          {systemAlertLevel !== 'green' && (
            <span className="ml-3 inline-flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-3 w-3 rounded-full ${systemAlertLevel === 'red' ? 'bg-red-400' : systemAlertLevel === 'orange' ? 'bg-orange-400' : 'bg-yellow-400'} opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${systemAlertLevel === 'red' ? 'bg-red-500' : systemAlertLevel === 'orange' ? 'bg-orange-500' : 'bg-yellow-500'}`}></span>
            </span>
          )}
        </div>
        <p className="text-gray-600 mb-4">{message}</p>
        
        <div className="flex flex-wrap gap-2">
          <Link to="/allerte" className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md px-4 py-2 inline-flex items-center transition-colors duration-200">
            Vedi tutte le allerte
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          {systemAlertLevel !== 'green' && (
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