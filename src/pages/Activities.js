// src/pages/Activities.js (estratto)
import React from 'react';
import EventCard from '../components/common/EventCard';

const Activities = () => {
  // Funzione per generare un'immagine illustrativa basata sul tipo di evento
  const getEventImage = (title, colorClass) => {
    // Determina il tipo di evento basandosi sul titolo
    const getEventType = (title) => {
      const lowerTitle = title.toLowerCase();
      if (lowerTitle.includes('primo soccorso') || lowerTitle.includes('corso')) return 'course';
      if (lowerTitle.includes('rischio') || lowerTitle.includes('prevenzione')) return 'prevention';
      if (lowerTitle.includes('volontariato') || lowerTitle.includes('volontario')) return 'volunteer';
      if (lowerTitle.includes('esercitazione')) return 'exercise';
      if (lowerTitle.includes('emergenza') || lowerTitle.includes('simulazione')) return 'emergency';
      return 'generic';
    };

    // Mappa dei colori per le diverse categorie di eventi
    const colorMap = {
      blue: '#1e40af',
      green: '#15803d',
      yellow: '#ca8a04',
      red: '#dc2626',
      purple: '#9333ea'
    };

    // Ottieni il tipo di evento
    const eventType = getEventType(title);
    const baseColor = colorMap[colorClass] || '#3b82f6';

    // Crea oggetto per passare i dati all'evento
    return {
      eventType,
      baseColor
    };
  };

  // Dati di esempio per gli eventi pianificati
  const upcomingEvents = [
    {
      id: 1,
      image: null,
      imageData: getEventImage('Corso Base di Primo Soccorso', 'blue'),
      date: '28 Maggio 2025',
      title: 'Corso Base di Primo Soccorso',
      description: 'Impara le tecniche base di primo soccorso con i nostri formatori certificati.',
      link: '/attivita/corso-primo-soccorso',
      colorClass: 'blue'
    },
    {
      id: 2,
      image: null,
      imageData: getEventImage('Prevenzione Rischio Idrogeologico', 'green'),
      date: '10 Giugno 2025',
      title: 'Prevenzione Rischio Idrogeologico',
      description: 'Workshop sulla prevenzione e gestione del rischio idrogeologico nel nostro territorio.',
      link: '/attivita/workshop-rischio-idrogeologico',
      colorClass: 'green'
    },
    {
      id: 3,
      image: null,
      imageData: getEventImage('Giornata del Volontariato', 'yellow'),
      date: '22 Giugno 2025',
      title: 'Giornata del Volontariato',
      description: 'Vieni a scoprire le attività della Protezione Civile e come diventare volontario.',
      link: '/attivita/giornata-volontariato',
      colorClass: 'yellow'
    },
    {
      id: 4,
      image: null,
      imageData: getEventImage('Esercitazione Rischio Sismico', 'red'),
      date: '5 Luglio 2025',
      title: 'Esercitazione Rischio Sismico',
      description: 'Esercitazione pratica sulle procedure da seguire in caso di terremoto.',
      link: '/attivita/esercitazione-rischio-sismico',
      colorClass: 'red'
    },
    {
      id: 5,
      image: null, 
      imageData: getEventImage('Corso Antincendio Boschivo', 'blue'),
      date: '18 Luglio 2025',
      title: 'Corso Antincendio Boschivo',
      description: 'Corso di formazione sulle tecniche di prevenzione e spegnimento incendi boschivi.',
      link: '/attivita/corso-antincendio',
      colorClass: 'blue'
    },
    {
      id: 6,
      image: null,
      imageData: getEventImage('Simulazione di Emergenza', 'purple'),
      date: '30 Luglio 2025',
      title: 'Simulazione di Emergenza',
      description: 'Attività di simulazione per testare il sistema di allerta e intervento locale.',
      link: '/attivita/simulazione-emergenza',
      colorClass: 'purple'
    }
  ];

  // Dati di esempio per le attività passate
  const pastActivities = [
    {
      id: 101,
      image: null,
      imageData: getEventImage('Intervento Alluvione Fiume Brenta', 'blue'),
      date: 'Aprile 2025',
      title: 'Intervento Alluvione Fiume Brenta',
      description: 'Intervento di emergenza durante l\'alluvione del fiume Brenta.',
      link: '/attivita/intervento-alluvione',
      colorClass: 'blue'
    },
    {
      id: 102,
      image: null,
      imageData: getEventImage('Giornata Ecologica', 'green'),
      date: 'Marzo 2025',
      title: 'Giornata Ecologica',
      description: 'Pulizia e monitoraggio dei corsi d\'acqua e delle aree verdi del comune.',
      link: '/attivita/giornata-ecologica',
      colorClass: 'green'
    },
    {
      id: 103,
      image: null,
      imageData: getEventImage('Incontro nelle Scuole', 'yellow'),
      date: 'Febbraio 2025',
      title: 'Incontro nelle Scuole',
      description: 'Formazione ai ragazzi delle scuole primarie sui comportamenti da tenere in caso di emergenza.',
      link: '/attivita/incontro-scuole',
      colorClass: 'yellow'
    }
  ];

  // Resto del componente invariato...
  
  return (
    <div className="container mx-auto p-6 md:p-8">
      {/* Header della sezione */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Le Nostre Attività</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          La Protezione Civile di Castello di Godego svolge numerose attività sul territorio, dalla prevenzione 
          all'intervento in caso di emergenze, passando per la formazione e la sensibilizzazione della cittadinanza.
        </p>
      </div>
      
      {/* Tipologie di attività */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* ... invariato ... */}
      </div>
      
      {/* Eventi e corsi in programma */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Eventi e Corsi in Programma</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map(event => (
            <EventCard 
              key={event.id}
              image={event.image}
              imageData={event.imageData}
              date={event.date}
              title={event.title}
              description={event.description}
              link={event.link}
              colorClass={event.colorClass}
            />
          ))}
        </div>
      </div>
      
      {/* Attività recenti */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Attività Recenti</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pastActivities.map(activity => (
            <EventCard 
              key={activity.id}
              image={activity.image}
              imageData={activity.imageData}
              date={activity.date}
              title={activity.title}
              description={activity.description}
              link={activity.link}
              colorClass={activity.colorClass}
            />
          ))}
        </div>
      </div>
      
      {/* Il resto del componente rimane invariato */}
    </div>
  );
};

export default Activities;