// src/components/alerts/AlertTimeline.js
import React from 'react';
import AlertBadge from './AlertBadge';

/**
 * Componente che mostra una timeline cronologica delle allerte
 * 
 * @param {Object} props
 * @param {Array} props.alerts - Array di allerte da visualizzare nella timeline
 */
const AlertTimeline = ({ alerts = [] }) => {
  // Funzione per formattare la data
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('it-IT', options);
  };
  
  // Funzione per determinare se un'allerta è attiva
  const isAlertActive = (alert) => {
    const now = new Date();
    const startDate = new Date(alert.startDate);
    const endDate = new Date(alert.endDate);
    return startDate <= now && endDate >= now;
  };
  
  // Ordina le allerte per data di inizio (più recenti prima)
  const sortedAlerts = [...alerts].sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  
  // Raggruppa le allerte per mese/anno
  const groupAlertsByMonth = () => {
    const groups = {};
    
    sortedAlerts.forEach(alert => {
      const date = new Date(alert.startDate);
      const monthYear = `${date.getMonth()}-${date.getFullYear()}`;
      const monthName = date.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' });
      
      if (!groups[monthYear]) {
        groups[monthYear] = {
          monthName,
          alerts: []
        };
      }
      
      groups[monthYear].alerts.push(alert);
    });
    
    return Object.values(groups);
  };
  
  const groupedAlerts = groupAlertsByMonth();
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-blue-700 text-white">
        <h3 className="text-xl font-bold flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Cronologia Allerte
        </h3>
      </div>
      
      <div className="p-4">
        {alerts.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>Non ci sono allerte da mostrare.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {groupedAlerts.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h4 className="text-lg font-semibold text-gray-700 mb-4 border-b border-gray-200 pb-2">
                  {group.monthName}
                </h4>
                
                <div className="relative border-l-2 border-blue-200 pl-6 ml-3 space-y-6">
                  {group.alerts.map((alert, alertIndex) => (
                    <div key={alertIndex} className="relative">
                      {/* Punto sulla timeline */}
                      <div 
                        className={`absolute w-4 h-4 rounded-full left-[-34px] top-1.5 z-10
                          ${isAlertActive(alert) 
                            ? 'bg-blue-600 ring-4 ring-blue-100 animate-pulse' 
                            : 'bg-gray-400'
                          }`}
                      ></div>
                      
                      {/* Linea di connessione */}
                      {alertIndex < group.alerts.length - 1 && (
                        <div className="absolute w-0.5 bg-blue-200 h-6 left-[-28px] top-6 z-0"></div>
                      )}
                      
                      {/* Contenuto */}
                      <div className={`
                        rounded-lg p-4 mb-2
                        ${isAlertActive(alert) 
                          ? 'bg-blue-50 border border-blue-200 shadow-md' 
                          : 'bg-gray-50 border border-gray-200'
                        }
                      `}>
                        <div className="flex justify-between items-start mb-2">
                          <AlertBadge level={alert.level} size="sm" />
                          <span className="text-sm text-gray-500">
                            {isAlertActive(alert) ? 'Attiva' : 'Conclusa'}
                          </span>
                        </div>
                        
                        <h5 className="font-semibold text-gray-800 mb-1">{alert.title}</h5>
                        
                        <div className="flex justify-between text-sm text-gray-600 mb-2">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {formatDate(alert.startDate)}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {formatDate(alert.endDate)}
                          </span>
                        </div>
                        
                        {alert.areas && alert.areas.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {alert.areas.map((area, areaIndex) => (
                              <span 
                                key={areaIndex}
                                className="inline-block text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertTimeline;