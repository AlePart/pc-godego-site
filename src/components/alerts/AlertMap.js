// src/components/alerts/AlertMap.js
import React from 'react';
import AlertBadge from './AlertBadge';

/**
 * Componente che mostra una mappa semplificata del territorio con le zone di allerta
 * 
 * @param {Object} props
 * @param {Array} props.alerts - Array di allerte da visualizzare sulla mappa
 */
const AlertMap = ({ alerts = [] }) => {
  // In un'implementazione reale, qui si utilizzerebbe una libreria di mappe come Leaflet o Google Maps
  // Per questo esempio, creiamo una mappa semplificata con SVG
  
  // Determina se c'è almeno un'allerta attiva
  const hasActiveAlerts = alerts && alerts.length > 0;
  
  // Prendi il livello di allerta più alto (rosso > arancione > giallo > verde)
  const getHighestAlertLevel = () => {
    if (!hasActiveAlerts) return 'green';
    
    if (alerts.some(alert => alert.level === 'red')) return 'red';
    if (alerts.some(alert => alert.level === 'orange')) return 'orange';
    if (alerts.some(alert => alert.level === 'yellow')) return 'yellow';
    return 'green';
  };
  
  const highestLevel = getHighestAlertLevel();
  
  // Calcola il numero di allerte per zona
  const getAlertsByArea = () => {
    const areaMap = {
      'Centro Storico': { count: 0, level: 'green' },
      'Zona Nord': { count: 0, level: 'green' },
      'Zona Sud': { count: 0, level: 'green' },
      'Zona Est': { count: 0, level: 'green' },
      'Zona Ovest': { count: 0, level: 'green' },
      'Zona Collinare': { count: 0, level: 'green' }
    };
    
    alerts.forEach(alert => {
      alert.areas.forEach(area => {
        if (areaMap[area]) {
          areaMap[area].count++;
          // Aggiorna il livello solo se è più alto di quello già presente
          if (
            (alert.level === 'red') || 
            (alert.level === 'orange' && areaMap[area].level !== 'red') ||
            (alert.level === 'yellow' && !['red', 'orange'].includes(areaMap[area].level))
          ) {
            areaMap[area].level = alert.level;
          }
        }
      });
    });
    
    return areaMap;
  };
  
  const alertsByArea = getAlertsByArea();
  
  // Colori per i livelli di allerta sulla mappa
  const levelColors = {
    red: { fill: '#dc2626', stroke: '#991b1b' },
    orange: { fill: '#f97316', stroke: '#c2410c' },
    yellow: { fill: '#fbbf24', stroke: '#d97706' },
    green: { fill: '#22c55e', stroke: '#15803d' }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-blue-700 text-white">
        <h3 className="text-xl font-bold flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Mappa delle Allerte
        </h3>
      </div>
      
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Legenda */}
          <div className="w-full md:w-64 shrink-0">
            <h4 className="font-semibold text-gray-700 mb-3">Stato attuale:</h4>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertBadge level={highestLevel} size="sm" />
                <span className="text-gray-600 text-sm">
                  {hasActiveAlerts ? 'Allerte attive' : 'Nessuna allerta attiva'}
                </span>
              </div>
              
              <p className="text-sm text-gray-600">
                {hasActiveAlerts 
                  ? `Ci sono ${alerts.length} allerte attive sul territorio. Consulta la mappa per i dettagli.`
                  : 'Non ci sono allerte attive sul territorio comunale.'}
              </p>
            </div>
            
            <h4 className="font-semibold text-gray-700 mb-3">Zone con allerte:</h4>
            <ul className="space-y-2">
              {Object.entries(alertsByArea)
                .filter(([_, data]) => data.count > 0)
                .map(([area, data]) => (
                  <li key={area} className="flex items-center space-x-2">
                    <span 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: levelColors[data.level].fill }}
                    ></span>
                    <span className="text-gray-700">{area}</span>
                    <span className="text-xs bg-gray-100 rounded-full px-2 py-0.5 text-gray-600">
                      {data.count} {data.count === 1 ? 'allerta' : 'allerte'}
                    </span>
                  </li>
                ))}
              
              {!Object.values(alertsByArea).some(data => data.count > 0) && (
                <li className="text-gray-600 text-sm italic">Nessuna zona con allerte attive</li>
              )}
            </ul>
          </div>
          
          {/* Mappa SVG */}
          <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden bg-blue-50 h-80 min-h-[320px]">
            <div className="w-full h-full relative">
              {/* Rappresentazione semplificata della mappa del comune */}
              <svg 
                viewBox="0 0 400 300" 
                className="w-full h-full"
              >
                {/* Sfondo */}
                <rect x="0" y="0" width="400" height="300" fill="#e0f2fe" />
                
                {/* Zone della città */}
                
                {/* Centro Storico */}
                <polygon 
                  points="180,140 220,140 220,180 180,180" 
                  fill={alertsByArea['Centro Storico'].count > 0 ? levelColors[alertsByArea['Centro Storico'].level].fill : '#f8fafc'}
                  stroke="#64748b" 
                  strokeWidth="2"
                />
                <text x="200" y="165" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Centro Storico</text>
                
                {/* Zona Nord */}
                <polygon 
                  points="150,50 250,50 220,140 180,140" 
                  fill={alertsByArea['Zona Nord'].count > 0 ? levelColors[alertsByArea['Zona Nord'].level].fill : '#f8fafc'} 
                  stroke="#64748b" 
                  strokeWidth="2"
                />
                <text x="200" y="95" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Zona Nord</text>
                
                {/* Zona Sud */}
                <polygon 
                  points="180,180 220,180 250,250 150,250" 
                  fill={alertsByArea['Zona Sud'].count > 0 ? levelColors[alertsByArea['Zona Sud'].level].fill : '#f8fafc'} 
                  stroke="#64748b" 
                  strokeWidth="2"
                />
                <text x="200" y="215" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Zona Sud</text>
                
                {/* Zona Est */}
                <polygon 
                  points="220,140 300,100 300,200 220,180" 
                  fill={alertsByArea['Zona Est'].count > 0 ? levelColors[alertsByArea['Zona Est'].level].fill : '#f8fafc'} 
                  stroke="#64748b" 
                  strokeWidth="2"
                />
                <text x="260" y="155" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Zona Est</text>
                
                {/* Zona Ovest */}
                <polygon 
                  points="100,100 180,140 180,180 100,200" 
                  fill={alertsByArea['Zona Ovest'].count > 0 ? levelColors[alertsByArea['Zona Ovest'].level].fill : '#f8fafc'} 
                  stroke="#64748b" 
                  strokeWidth="2"
                />
                <text x="140" y="155" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Zona Ovest</text>
                
                {/* Zona Collinare */}
                <path 
                  d="M300,100 C350,80 380,120 350,180 C330,220 310,210 300,200 Z" 
                  fill={alertsByArea['Zona Collinare'].count > 0 ? levelColors[alertsByArea['Zona Collinare'].level].fill : '#f8fafc'} 
                  stroke="#64748b" 
                  strokeWidth="2"
                />
                <text x="330" y="150" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold">Zona Collinare</text>
                
                {/* Fiume */}
                <path 
                  d="M50,50 C100,70 150,150 120,200 C100,230 80,250 50,270" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                />
                <text x="70" y="90" textAnchor="middle" fill="#1e40af" fontSize="8" fontStyle="italic">Fiume Brenta</text>
                
                {/* Legenda */}
                <rect x="20" y="20" width="80" height="16" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
                <text x="60" y="32" textAnchor="middle" fill="#1e293b" fontSize="10">Nessuna allerta</text>
                
                {hasActiveAlerts && (
                  <>
                    {Object.entries(levelColors).map(([level, colors], index) => (
                      <g key={level}>
                        <rect 
                          x="20" 
                          y={40 + (index * 20)} 
                          width="80" 
                          height="16" 
                          fill={colors.fill} 
                          stroke={colors.stroke} 
                          strokeWidth="1" 
                        />
                        <text 
                          x="60" 
                          y={52 + (index * 20)} 
                          textAnchor="middle" 
                          fill="#1e293b" 
                          fontSize="10"
                        >
                          Allerta {level === 'red' ? 'Rossa' : level === 'orange' ? 'Arancione' : level === 'yellow' ? 'Gialla' : 'Verde'}
                        </text>
                      </g>
                    ))}
                  </>
                )}
              </svg>
              
              {/* Nota informativa */}
              <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded text-xs text-gray-500">
                Mappa schematica a solo scopo illustrativo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertMap;