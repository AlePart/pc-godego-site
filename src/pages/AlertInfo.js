// src/pages/AlertInfo.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlertBadge from '../components/alerts/AlertBadge';
import AlertCard from '../components/alerts/AlertCard';
import AlertMap from '../components/alerts/AlertMap';
import AlertTimeline from '../components/alerts/AlertTimeline';
import { useAlerts } from '../contexts/AlertContext';

const AlertInfo = () => {
  // Stato per filtrare le allerte
  const [filter, setFilter] = useState('current');
  
  // Utilizzo del context delle allerte
  const { activeAlerts, systemAlertLevel, allAlerts } = useAlerts();

  // Funzione per filtrare le allerte
  const getFilteredAlerts = () => {
    if (filter === 'all') {
      return allAlerts;
    } else if (filter === 'current') {
      return activeAlerts;
    } else if (filter === 'historical') {
      // Allerte storiche: quelle che non sono attive
      const now = new Date();
      return allAlerts.filter(alert => {
        const endDate = new Date(alert.endDate);
        return endDate < now;
      });
    } else if (['red', 'orange', 'yellow', 'green'].includes(filter)) {
      return allAlerts.filter(alert => alert.level === filter);
    }
    return allAlerts;
  };

  // Funzione per formattare la data
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('it-IT', options);
  };

  // Livelli di allerta e relativi colori
  const alertLevels = [
    { name: 'red', label: 'Rossa', color: 'bg-red-600', text: 'text-red-800', border: 'border-red-600', description: 'Elevata. Eventi eccezionali con danni e rischi per popolazione.' },
    { name: 'orange', label: 'Arancione', color: 'bg-orange-500', text: 'text-orange-800', border: 'border-orange-500', description: 'Moderata. Eventi diffusi con potenziali danni.' },
    { name: 'yellow', label: 'Gialla', color: 'bg-yellow-400', text: 'text-yellow-800', border: 'border-yellow-400', description: 'Ordinaria. Eventi localizzati ma intensi.' },
    { name: 'green', label: 'Verde', color: 'bg-green-500', text: 'text-green-800', border: 'border-green-500', description: 'Monitoraggio. Assenza di fenomeni significativi.' }
  ];

  // Dati storici delle allerte passate
  const historicalAlerts = [
    {
      id: 101,
      level: 'red',
      title: 'Allerta Rossa - Esondazione Fiume Brenta',
      description: 'Esondazione del fiume Brenta in alcune aree periferiche del comune.',
      startDate: '2025-04-10T12:00:00',
      endDate: '2025-04-12T18:00:00',
      areas: ['Zona Est', 'Centro Storico'],
      weatherType: 'flood',
      instructions: 'Evacuazione immediata delle zone coinvolte. Centro di accoglienza attivo presso la palestra comunale.'
    },
    {
      id: 102,
      level: 'orange',
      title: 'Allerta Arancione - Nevicata Intensa',
      description: 'Nevicata intensa con accumuli previsti oltre i 30cm in 24 ore.',
      startDate: '2025-02-15T06:00:00',
      endDate: '2025-02-16T20:00:00',
      areas: ['Tutto il territorio comunale'],
      weatherType: 'snow',
      instructions: 'Limitare gli spostamenti ai soli casi di necessità. Catene da neve o pneumatici invernali obbligatori.'
    },
    {
      id: 103,
      level: 'yellow',
      title: 'Allerta Gialla - Ondata di Calore',
      description: 'Temperature elevate con picchi oltre i 35°C nelle ore centrali della giornata.',
      startDate: '2024-07-20T10:00:00',
      endDate: '2024-07-25T20:00:00',
      areas: ['Tutto il territorio comunale'],
      weatherType: 'heat',
      instructions: 'Evitare l\'esposizione diretta al sole nelle ore più calde. Particolare attenzione per anziani e bambini.'
    }
  ];

  // Combina le allerte attive con quelle storiche per la visualizzazione
  const combinedAlerts = [...getFilteredAlerts(), ...historicalAlerts];

  return (
    <div className="container mx-auto p-6 md:p-8">
      {/* Header della sezione con badge stato generale */}
      <div className="mb-10 text-center">
        <div className="flex justify-center items-center mb-3">
          <h1 className="text-3xl font-bold text-blue-800 mr-3">Sistema di Allerte</h1>
          <AlertBadge level={systemAlertLevel} size="lg" />
        </div>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          In questa pagina puoi trovare informazioni sulle allerte meteo in corso e passate nel territorio di Castello di Godego. 
          Il sistema di allerta è coordinato con la Protezione Civile Regionale e viene aggiornato regolarmente.
        </p>
      </div>

      {/* Riepilogo dello stato corrente del sistema di allerta */}
      <div className="mb-8 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Stato Attuale del Sistema
          </h2>
          
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className={`flex-1 p-4 rounded-lg bg-opacity-10 border ${
              systemAlertLevel === 'red' ? 'bg-red-100 border-red-200' :
              systemAlertLevel === 'orange' ? 'bg-orange-100 border-orange-200' :
              systemAlertLevel === 'yellow' ? 'bg-yellow-100 border-yellow-200' :
              'bg-green-100 border-green-200'
            }`}>
              <div className="flex items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800 mr-2">Livello di Allerta:</h3>
                <AlertBadge level={systemAlertLevel} size="md" />
              </div>
              
              <p className="text-gray-700">
                {systemAlertLevel === 'red' ? 'Criticità elevata. Prestare massima attenzione e seguire le indicazioni delle autorità.' :
                 systemAlertLevel === 'orange' ? 'Criticità moderata. Evitare le zone a rischio e limitare gli spostamenti non necessari.' :
                 systemAlertLevel === 'yellow' ? 'Criticità ordinaria. Prestare attenzione e mantenersi informati sulle condizioni meteo.' :
                 'Nessuna criticità in corso. Il sistema di monitoraggio è attivo.'}
              </p>
            </div>
            
            <div className="flex-1 p-4 rounded-lg bg-blue-50 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Allerte Attive:
                {activeAlerts.length > 0 && (
                  <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {activeAlerts.length}
                  </span>
                )}
              </h3>
              
              {activeAlerts.length > 0 ? (
                <ul className="space-y-2">
                  {activeAlerts.map(alert => (
                    <li key={alert.id} className="flex items-start space-x-2">
                      <span className={`flex-shrink-0 w-3 h-3 mt-1 rounded-full ${
                        alert.level === 'red' ? 'bg-red-600' :
                        alert.level === 'orange' ? 'bg-orange-500' :
                        alert.level === 'yellow' ? 'bg-yellow-400' :
                        'bg-green-500'
                      }`}></span>
                      <span className="text-gray-700">{alert.title}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">Nessuna allerta attiva al momento.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sezione informativa sulle allerte */}
      <div className="mb-12 bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Come funziona il sistema di allerta</h2>
        <p className="text-gray-700 mb-6">
          Il sistema di allerta utilizza un codice colore per indicare la gravità dei fenomeni attesi. 
          I livelli vanno dal verde (nessuna criticità) al rosso (criticità elevata).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {alertLevels.map((level) => (
            <div key={level.name} className={`rounded-lg border ${level.border} p-4`}>
              <div className="flex items-center mb-2">
                <div className={`w-6 h-6 rounded-full ${level.color} mr-2`}></div>
                <h3 className={`font-bold ${level.text}`}>Allerta {level.label}</h3>
              </div>
              <p className="text-gray-600 text-sm">{level.description}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-700">
          In caso di allerta, seguire le indicazioni fornite dalla Protezione Civile e dalle autorità locali. 
          Per emergenze, contattare il numero unico 112.
        </p>
      </div>

      {/* Mappa delle allerte */}
      {/* <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Mappa delle allerte in corso</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <AlertMap alerts={activeAlerts} />
        </div>
      </div> */}

      {/* Filtri per le allerte */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button 
          onClick={() => setFilter('all')} 
          className={`px-4 py-2 rounded-md font-medium ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Tutte
        </button>
        <button 
          onClick={() => setFilter('current')} 
          className={`px-4 py-2 rounded-md font-medium ${filter === 'current' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          In corso
        </button>
        <button 
          onClick={() => setFilter('historical')} 
          className={`px-4 py-2 rounded-md font-medium ${filter === 'historical' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          Passate
        </button>
        {alertLevels.map(level => (
          <button 
            key={level.name}
            onClick={() => setFilter(level.name)} 
            className={`px-4 py-2 rounded-md font-medium ${filter === level.name ? 'bg-blue-600 text-white' : `bg-${level.name}-100 text-${level.name}-700 hover:bg-${level.name}-200`}`}
          >
            Allerta {level.label}
          </button>
        ))}
      </div>

      {/* Elenco delle allerte */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">
          {filter === 'current' ? 'Allerte in corso' : 
           filter === 'historical' ? 'Allerte passate' : 
           filter === 'all' ? 'Tutte le allerte' : 
           `Allerte di livello ${filter}`}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {getFilteredAlerts().map(alert => (
            <AlertCard 
              key={alert.id}
              level={alert.level}
              title={alert.title}
              description={alert.description}
              startDate={formatDate(alert.startDate)}
              endDate={formatDate(alert.endDate)}
              areas={alert.areas}
              weatherType={alert.weatherType}
              instructions={alert.instructions}
            />
          ))}
        </div>

        {getFilteredAlerts().length === 0 && (
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-600">Nessuna allerta trovata con i filtri selezionati.</p>
          </div>
        )}
      </div>

      {/* Timeline delle allerte */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Cronologia delle allerte</h2>
        <AlertTimeline alerts={combinedAlerts.sort((a, b) => new Date(b.startDate) - new Date(a.startDate))} />
      </div>

      {/* Consigli e comportamenti da seguire */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Come comportarsi in caso di allerta</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Prima dell'allerta
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Informati sulla situazione meteo prevista</li>
              <li>Prepara una scorta d'acqua e cibo non deperibile</li>
              <li>Tieni a portata di mano torce e batterie di riserva</li>
              <li>Verifica che il tuo telefono sia carico</li>
              <li>Segui gli aggiornamenti sui canali ufficiali</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Durante l'allerta
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Limita gli spostamenti ai soli casi di necessità</li>
              <li>Non sostare in prossimità di corsi d'acqua</li>
              <li>Evita di attraversare ponti o sottopassi</li>
              <li>Segui le indicazioni delle autorità</li>
              <li>Non intralciare i mezzi di soccorso</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/contatti" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition-colors duration-300">
            Contatta la Protezione Civile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlertInfo;