// src/components/alerts/AlertCard.js
import React, { useState } from 'react';
import AlertBadge from './AlertBadge';

/**
 * Componente che mostra un'allerta in formato card con dettagli espandibili
 * 
 * @param {Object} props
 * @param {string} props.level - Livello dell'allerta (red, orange, yellow, green)
 * @param {string} props.title - Titolo dell'allerta
 * @param {string} props.description - Descrizione dell'allerta
 * @param {string} props.startDate - Data di inizio dell'allerta (formattata)
 * @param {string} props.endDate - Data di fine dell'allerta (formattata)
 * @param {string[]} props.areas - Array delle zone interessate
 * @param {string} props.weatherType - Tipo di fenomeno meteorologico
 * @param {string} props.instructions - Istruzioni da seguire
 */
const AlertCard = ({ 
  level = 'green',
  title = 'Allerta Meteo',
  description = 'Descrizione dell\'allerta meteo',
  startDate = 'Data inizio',
  endDate = 'Data fine',
  areas = [],
  weatherType = 'generic',
  instructions = ''
}) => {
  // Stato per gestire l'espansione della card
  const [expanded, setExpanded] = useState(false);

  // Configurazione per i diversi livelli di allerta
  const alertConfig = {
    red: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      headerBg: 'bg-red-600',
      text: 'text-red-800',
      highlight: 'text-red-600'
    },
    orange: {
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      headerBg: 'bg-orange-500',
      text: 'text-orange-800',
      highlight: 'text-orange-600'
    },
    yellow: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      headerBg: 'bg-yellow-400',
      text: 'text-yellow-800',
      highlight: 'text-yellow-600'
    },
    green: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      headerBg: 'bg-green-500',
      text: 'text-green-800',
      highlight: 'text-green-600'
    }
  };

  // Icone per i diversi tipi di fenomeni meteorologici
  const weatherIcons = {
    rain: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14a2 2 0 00-2-2h-2a1 1 0 010-2h2a2 2 0 002-2V6c0-1.1-.9-2-2-2h-4C5.58 4 2 7.58 2 12s3.58 8 8 8h7c1.1 0 2-.9 2-2v-2a2 2 0 00-2-2h-2a1 1 0 110-2h2c1.1 0 2-.9 2-2v-1" />
      </svg>
    ),
    wind: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    flood: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
    snow: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    heat: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    generic: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  // Ottieni la configurazione per il livello specificato
  const config = alertConfig[level] || alertConfig.green;
  
  // Ottieni l'icona per il tipo di fenomeno specificato
  const weatherIcon = weatherIcons[weatherType] || weatherIcons.generic;

  return (
    <div className={`${config.bg} border ${config.border} rounded-lg shadow-md overflow-hidden transition-all duration-300 ${expanded ? 'shadow-lg' : ''}`}>
      <div className={`${config.headerBg} p-4 text-white`}>
        <div className="flex justify-between items-center">
          <AlertBadge level={level} />
          <button 
            onClick={() => setExpanded(!expanded)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-expanded={expanded}
            aria-label={expanded ? "Chiudi dettagli" : "Mostra dettagli"}
          >
            <svg 
              className={`w-5 h-5 transform transition-transform ${expanded ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <h3 className="text-lg font-bold mt-2">{title}</h3>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-4 items-start mb-4">
          <div className="flex-1 min-w-0">
            <p className={`${config.text} mb-2`}>{description}</p>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Dal: {startDate}
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Al: {endDate}
              </span>
            </div>
          </div>
          
          <div className={`${config.highlight} flex items-center justify-center p-2 rounded-full bg-white shadow-sm`}>
            {weatherIcon}
          </div>
        </div>
        
        {/* Contenuto espandibile */}
        <div className={`overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96' : 'max-h-0'}`}>
          <div className="border-t border-gray-200 pt-4 mt-2">
            {areas && areas.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">Zone interessate:</h4>
                <div className="flex flex-wrap gap-2">
                  {areas.map((area, index) => (
                    <span 
                      key={index} 
                      className={`text-sm px-2 py-1 rounded-full ${config.bg} border ${config.border}`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {instructions && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Comportamento consigliato:</h4>
                <p className="text-sm text-gray-600">{instructions}</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Pulsante "Vedi dettagli" quando non è espanso */}
        {!expanded && (
          <button 
            onClick={() => setExpanded(true)}
            className={`text-sm font-medium ${config.highlight} mt-2 flex items-center hover:underline`}
          >
            Vedi dettagli
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default AlertCard;