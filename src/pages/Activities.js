// src/pages/Activities.js
import React from 'react';
import EventCard from '../components/common/EventCard';

const Activities = () => {
  // Dati di esempio per gli eventi pianificati
  const upcomingEvents = [
    {
      id: 1,
      image: null, // L'immagine sarà generata dal componente PlaceholderImage interno a EventCard
      date: '28 Maggio 2025',
      title: 'Corso Base di Primo Soccorso',
      description: 'Impara le tecniche base di primo soccorso con i nostri formatori certificati.',
      link: '/attivita/corso-primo-soccorso',
      colorClass: 'blue'
    },
    {
      id: 2,
      image: null,
      date: '10 Giugno 2025',
      title: 'Prevenzione Rischio Idrogeologico',
      description: 'Workshop sulla prevenzione e gestione del rischio idrogeologico nel nostro territorio.',
      link: '/attivita/workshop-rischio-idrogeologico',
      colorClass: 'green'
    },
    {
      id: 3,
      image: null,
      date: '22 Giugno 2025',
      title: 'Giornata del Volontariato',
      description: 'Vieni a scoprire le attività della Protezione Civile e come diventare volontario.',
      link: '/attivita/giornata-volontariato',
      colorClass: 'yellow'
    },
    {
      id: 4,
      image: null,
      date: '5 Luglio 2025',
      title: 'Esercitazione Rischio Sismico',
      description: 'Esercitazione pratica sulle procedure da seguire in caso di terremoto.',
      link: '/attivita/esercitazione-rischio-sismico',
      colorClass: 'red'
    },
    {
      id: 5,
      image: null,
      date: '18 Luglio 2025',
      title: 'Corso Antincendio Boschivo',
      description: 'Corso di formazione sulle tecniche di prevenzione e spegnimento incendi boschivi.',
      link: '/attivita/corso-antincendio',
      colorClass: 'blue'
    },
    {
      id: 6,
      image: null,
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
      date: 'Aprile 2025',
      title: 'Intervento Alluvione Fiume Brenta',
      description: 'Intervento di emergenza durante l\'alluvione del fiume Brenta.',
      link: '/attivita/intervento-alluvione',
      colorClass: 'blue'
    },
    {
      id: 102,
      image: null,
      date: 'Marzo 2025',
      title: 'Giornata Ecologica',
      description: 'Pulizia e monitoraggio dei corsi d\'acqua e delle aree verdi del comune.',
      link: '/attivita/giornata-ecologica',
      colorClass: 'green'
    },
    {
      id: 103,
      image: null,
      date: 'Febbraio 2025',
      title: 'Incontro nelle Scuole',
      description: 'Formazione ai ragazzi delle scuole primarie sui comportamenti da tenere in caso di emergenza.',
      link: '/attivita/incontro-scuole',
      colorClass: 'yellow'
    }
  ];

  // Tipologie di attività svolte
  const activityTypes = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Prevenzione",
      description: "Monitoriamo il territorio e realizziamo campagne informative per prevenire situazioni di rischio."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Formazione",
      description: "Organizziamo corsi di formazione per volontari e cittadini su primo soccorso, antincendio e gestione emergenze."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Emergenze",
      description: "Interveniamo in caso di emergenze locali e nazionali in coordinamento con le autorità competenti."
    },
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Comunità",
      description: "Promuoviamo la cultura della sicurezza e della protezione civile nella nostra comunità."
    }
  ];

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
        {activityTypes.map((activity, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-4">
              {activity.icon}
            </div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">{activity.title}</h3>
            <p className="text-gray-600">{activity.description}</p>
          </div>
        ))}
      </div>
      
      {/* Eventi e corsi in programma */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Eventi e Corsi in Programma</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map(event => (
            <EventCard 
              key={event.id}
              image={event.image}
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
              date={activity.date}
              title={activity.title}
              description={activity.description}
              link={activity.link}
              colorClass={activity.colorClass}
            />
          ))}
        </div>
      </div>
      
      {/* Calendario annuale */}
      <div className="bg-blue-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Calendario Annuale</h2>
        <p className="text-gray-600 text-center mb-8">
          Ecco i principali eventi e attività pianificati per l'anno in corso. Il calendario può subire variazioni in base 
          alle necessità operative e alle emergenze.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6">
              <h3 className="font-bold text-lg text-blue-800 mb-4">Primo Semestre</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Gen</div>
                  <div>
                    <p className="font-medium">Corso Base Volontari</p>
                    <p className="text-sm text-gray-600">Formazione base per nuovi volontari</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Feb</div>
                  <div>
                    <p className="font-medium">Incontri nelle Scuole</p>
                    <p className="text-sm text-gray-600">Sensibilizzazione degli studenti</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Mar</div>
                  <div>
                    <p className="font-medium">Giornata Ecologica</p>
                    <p className="text-sm text-gray-600">Pulizia dei corsi d'acqua</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Apr</div>
                  <div>
                    <p className="font-medium">Esercitazione Comunale</p>
                    <p className="text-sm text-gray-600">Test del piano di emergenza</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Mag</div>
                  <div>
                    <p className="font-medium">Corso Primo Soccorso</p>
                    <p className="text-sm text-gray-600">Aperto alla cittadinanza</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Giu</div>
                  <div>
                    <p className="font-medium">Giornata del Volontariato</p>
                    <p className="text-sm text-gray-600">Presentazione attività</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-lg text-blue-800 mb-4">Secondo Semestre</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Lug</div>
                  <div>
                    <p className="font-medium">Corso Antincendio</p>
                    <p className="text-sm text-gray-600">Formazione specialistica</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Ago</div>
                  <div>
                    <p className="font-medium">Presidio Eventi Estivi</p>
                    <p className="text-sm text-gray-600">Supporto manifestazioni</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Set</div>
                  <div>
                    <p className="font-medium">Monitoraggio Rischio Idrico</p>
                    <p className="text-sm text-gray-600">Verifica argini e corsi d'acqua</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Ott</div>
                  <div>
                    <p className="font-medium">Esercitazione Regionale</p>
                    <p className="text-sm text-gray-600">Partecipazione coordinata</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Nov</div>
                  <div>
                    <p className="font-medium">Corso Comunicazioni Radio</p>
                    <p className="text-sm text-gray-600">Uso apparati e protocolli</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 w-12 font-semibold text-blue-600">Dic</div>
                  <div>
                    <p className="font-medium">Incontro Conclusivo</p>
                    <p className="text-sm text-gray-600">Bilancio attività e pianificazione</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;