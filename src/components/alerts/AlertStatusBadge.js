// src/components/alerts/AlertStatusBadge.js - Versione corretta
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAlerts } from '../../contexts/AlertContext';

/**
 * Badge di stato delle allerte da visualizzare nell'header
 * Mostra il livello di allerta corrente e permette di accedere rapidamente alla pagina delle allerte
 */
const AlertStatusBadge = () => {
  const { systemAlertLevel, activeAlerts, emergency } = useAlerts();
  const [showPopup, setShowPopup] = useState(false);
  
  // Riferimento al componente per gestire il click esterno
  const popupRef = useRef(null);
  
  // Gestione del click fuori dal popup per chiuderlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Configurazioni per i diversi livelli di allerta
  const alertConfig = {
    red: {
      bg: 'bg-red-600',
      text: 'Allerta Rossa ' + (emergency ? ' - Emergenza In Corso' : ''),
      ping: true,
      border: 'border-red-700',
      hover: 'hover:bg-red-700',
      textColor: 'text-white'
    },
    orange: {
      bg: 'bg-orange-500',
      text: 'Allerta Arancione ' + (emergency ? ' - Emergenza In Corso' : ''),
      ping: true,
      border: 'border-orange-600',
      hover: 'hover:bg-orange-600',
      textColor: 'text-white'
    },
    yellow: {
      bg: 'bg-yellow-400',
      text: 'Allerta Gialla ' + (emergency ? ' - Emergenza In Corso' : ''),
      ping: true,
      border: 'border-yellow-500',
      hover: 'hover:bg-yellow-500',
      textColor: 'text-yellow-900'
    },
    green: {
      bg: 'bg-green-500',
      text: 'Nessuna Allerta ' + (emergency ? ' - Emergenza In Corso' : ''),
      ping: false,
      border: 'border-green-600',
      hover: 'hover:bg-green-600',
      textColor: 'text-white'
    }
  };
  
  // Ottieni la configurazione per il livello corrente
  const config = alertConfig[systemAlertLevel] || alertConfig.green;
  
  // Funzione per formattare la data
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('it-IT', options);
  };
  
  return (
    <div className="relative" ref={popupRef}>
      <button
        className={`flex items-center space-x-1 ${config.bg} ${config.textColor} ${config.hover} px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 border ${config.border}`}
        onClick={() => setShowPopup(!showPopup)}
        aria-expanded={showPopup}
        aria-label="Stato allerte"
      >
        {config.ping && (
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
        )}
        <span>{config.text}</span>
        {activeAlerts.length > 0 && (
          <span className="ml-1 bg-white text-gray-800 text-xs font-bold px-1.5 py-0.5 rounded-full">
            {activeAlerts.length}
          </span>
        )}
        <svg 
          className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${showPopup ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Popup con sommario delle allerte - VERSIONE CORRETTA RESPONSIVE */}
      {showPopup && (
        <div className="absolute  transform -translate-x-1 mt-2 w-[20rem] max-w-[90vw] bg-white rounded-lg shadow-lg overflow-y-auto z-50">


          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-gray-800">Stato Allerte</h4>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowPopup(false)}
                aria-label="Chiudi"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {activeAlerts.length > 0 ? (
              <div className="space-y-2 mb-3 max-h-60 overflow-y-auto">
                {activeAlerts.map(alert => (
                  <div key={alert.id} className={`p-2 rounded-md border ${
                    alert.level === 'red' ? 'border-red-200 bg-red-50' :
                    alert.level === 'orange' ? 'border-orange-200 bg-orange-50' :
                    alert.level === 'yellow' ? 'border-yellow-200 bg-yellow-50' :
                    'border-green-200 bg-green-50'
                  }`}>
                    <div className="flex justify-between items-start">
                      <h5 className="text-sm font-semibold text-gray-800">{alert.title}</h5>
                      <span className={`px-1.5 py-0.5 text-xs rounded-full ${
                        alert.level === 'red' ? 'bg-red-600 text-white' :
                        alert.level === 'orange' ? 'bg-orange-500 text-white' :
                        alert.level === 'yellow' ? 'bg-yellow-400 text-yellow-900' :
                        'bg-green-500 text-white'
                      }`}>
                        {alert.level === 'red' ? 'Rossa' :
                         alert.level === 'orange' ? 'Arancione' :
                         alert.level === 'yellow' ? 'Gialla' : 'Verde'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Fino al: {formatDate(alert.endDate)}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-600 mb-3">Non ci sono allerte attive al momento.</p>
            )}
            
            <Link 
              to="/allerte" 
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200"
              onClick={() => setShowPopup(false)}
            >
              Vai alla pagina Allerte
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertStatusBadge;