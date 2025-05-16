// src/contexts/AlertContext.js - VERSIONE CORRETTA
import React, { createContext, useContext, useState, useEffect } from 'react';

// Creazione del context per le allerte
const AlertContext = createContext();

// Provider del context
export const AlertProvider = ({ children }) => {
  // Stato delle allerte attive
  const [activeAlerts, setActiveAlerts] = useState([]);

  const [emergency, setEmergency] = useState(true);
  
  // Stato globale di allerta del sistema
  const [systemAlertLevel, setSystemAlertLevel] = useState('green');
  
  // IMPORTANTE: Sovrascriviamo la data attuale per testare le allerte future
  // In un ambiente di produzione, questa riga dovrebbe essere rimossa
  const CURRENT_DATE = new Date('2025-05-19T12:00:00');
  
  // Dati simulati delle allerte attive (in un'applicazione reale, questi verrebbero da un'API)
  const mockAlerts = [
    {
      id: 1,
      level: 'yellow',
      title: 'Allerta Gialla - Precipitazioni Intense',
      description: 'Previste precipitazioni intense con possibili locali allagamenti nelle zone periferiche del comune.',
      startDate: '2025-05-18T09:00:00',
      endDate: '2025-05-19T20:00:00', // NOTA: Estesa per testare se è attiva il 19 maggio
      areas: [],
      weatherType: 'rain',
      instructions: 'Prestare attenzione in prossimità di canali e fossati. Evitare il transito in sottopassi.'
    },
    {
      id: 2,
      level: 'green',
      title: 'Monitoraggio - Vento Forte',
      description: 'Monitoraggio per raffiche di vento previste in serata nella zona collinare.',
      startDate: '2025-05-16T18:00:00',
      endDate: '2025-05-18T00:00:00',
      areas: [],
      weatherType: 'wind',
      instructions: 'Nessuna precauzione particolare richiesta, situazione sotto controllo.'
    },
    // NUOVA ALLERTA PER IL 19 MAGGIO
    {
      id: 3,
      level: 'red',
      title: 'Allerta Rossa - Rischio Idrogeologico',
      description: 'Forti precipitazioni potrebbero causare esondazioni e frane. Si consiglia di limitare gli spostamenti.',
      startDate: '2025-05-19T08:00:00',  // Data di inizio: 19 maggio mattina
      endDate: '2025-05-20T20:00:00',    // Data di fine: 20 maggio sera
      areas: ['Centro Storico', 'Zona Sud', 'Zona Est'],
      weatherType: 'flood',
      instructions: 'Evitare le aree soggette ad allagamento. In caso di emergenza contattare il numero 112. Non sostare vicino ai corsi d\'acqua.'
    }
  ];
  
  // Funzione per calcolare il livello di allerta più alto
  const calculateHighestAlertLevel = (alerts) => {
    const levelPriority = { red: 4, orange: 3, yellow: 2, green: 1 };
    
    if (!alerts || alerts.length === 0) return 'green';
    
    // Trova il livello più alto
    return alerts.reduce((highest, alert) => {
      return levelPriority[alert.level] > levelPriority[highest] ? alert.level : highest;
    }, 'green');
  };
  
  // Funzione per verificare se un'allerta è attiva (in base alla data)
  const isAlertActive = (alert) => {
    // Usa la data corrente per i test o la data attuale in produzione
    const now =  new Date();
    
    const startDate = new Date(alert.startDate);
    const endDate = new Date(alert.endDate);
    
    // DEBUG: Stampa utile per verificare le date durante lo sviluppo
    console.log(`Checking alert ${alert.id}: ${alert.title}`);
    console.log(`  Start date: ${startDate.toLocaleString()}`);
    console.log(`  End date: ${endDate.toLocaleString()}`);
    console.log(`  Current date: ${now.toLocaleString()}`);
    console.log(`  Is active: ${startDate <= now && endDate >= now}`);
    
    return startDate <= now && endDate >= now;
  };
  
  // Filtra le allerte attive
  const filterActiveAlerts = (allAlerts) => {
    return allAlerts.filter(isAlertActive);
  };
  
  // Funzione per ottenere il messaggio di allerta principale
  const getMainAlertMessage = () => {
    if (activeAlerts.length === 0) {
      return 'Nessuna allerta in corso';
    }
    
    // Trova l'allerta con il livello più alto
    const alertLevels = { red: 4, orange: 3, yellow: 2, green: 1 };
    const highestAlert = activeAlerts.reduce((highest, current) => {
      return alertLevels[current.level] > alertLevels[highest.level] ? current : highest;
    }, activeAlerts[0]);
    
    return highestAlert.description;
  };
  
  // Aggiorna lo stato con le allerte attive e il livello di allerta del sistema
  useEffect(() => {
    // In un'applicazione reale, qui si farebbe una chiamata API
    const fetchActiveAlerts = async () => {
      try {
        // Simuliamo un ritardo di caricamento
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Filtra le allerte attive
        const currentActiveAlerts = filterActiveAlerts(mockAlerts);
        console.log("Allerte attive rilevate:", currentActiveAlerts.length);
        setActiveAlerts(currentActiveAlerts);
        
        // Calcola il livello più alto di allerta
        const highestLevel = calculateHighestAlertLevel(currentActiveAlerts);
        console.log("Livello di allerta del sistema:", highestLevel);
        setSystemAlertLevel(highestLevel);
        
      } catch (error) {
        console.error('Errore nel recupero delle allerte:', error);
        setActiveAlerts([]);
        setSystemAlertLevel('green');
      }
    };
    setEmergency(false);
    
    fetchActiveAlerts();
    
    // Aggiorna le allerte attive ogni 5 minuti
    const intervalId = setInterval(fetchActiveAlerts, 5 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <AlertContext.Provider value={{
      activeAlerts,
      systemAlertLevel,
      getMainAlertMessage,
      allAlerts: mockAlerts, // Aggiunto per accedere a tutte le allerte
      emergency:emergency

    }}>
      {children}
    </AlertContext.Provider>
  );
};

// Hook personalizzato per utilizzare il context
export const useAlerts = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlerts deve essere usato all\'interno di un AlertProvider');
  }
  return context;
};

export default AlertContext;