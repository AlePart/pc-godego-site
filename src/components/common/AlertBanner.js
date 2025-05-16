import React from 'react';

const AlertBanner = ({ level = 'none', message = 'Nessuna allerta in corso' }) => {
  const alertLevels = {
    none: {
      color: 'green',
      text: 'Nessuna Allerta',
      description: 'Attualmente non ci sono allerte meteo in corso per il nostro territorio.'
    },
    yellow: {
      color: 'yellow',
      text: 'Allerta Gialla',
      description: 'Allerta di livello ordinario. Prestare attenzione.'
    },
    orange: {
      color: 'orange',
      text: 'Allerta Arancione',
      description: 'Allerta di livello moderato. Condizioni meteorologiche potenzialmente pericolose.'
    },
    red: {
      color: 'red',
      text: 'Allerta Rossa',
      description: 'Allerta di livello elevato. Condizioni meteorologiche molto pericolose.'
    }
  };

  const currentAlert = alertLevels[level] || alertLevels.none;
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
          <div className={`w-4 h-4 rounded-full bg-${currentAlert.color}-500 mr-2`}></div>
          <span className="font-semibold">Stato Attuale: {currentAlert.text}</span>
        </div>
        <p className="text-gray-600 mb-4">{customMessage}</p>
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
          Vedi tutte le allerte
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AlertBanner;