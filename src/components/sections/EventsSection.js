import React from 'react';
import EventCard from '../common/EventCard';
import { Link } from 'react-router-dom';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      image: 'https://via.placeholder.com/600/200',
      date: '28 Maggio 2025',
      title: 'Corso Base di Primo Soccorso',
      description: 'Impara le tecniche base di primo soccorso con i nostri formatori certificati.',
      link: '/attivita/corso-primo-soccorso',
      colorClass: 'blue'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/600/200',
      date: '10 Giugno 2025',
      title: 'Prevenzione Rischio Idrogeologico',
      description: 'Workshop sulla prevenzione e gestione del rischio idrogeologico nel nostro territorio.',
      link: '/attivita/workshop-rischio-idrogeologico',
      colorClass: 'green'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/600/200',
      date: '22 Giugno 2025',
      title: 'Giornata del Volontariato',
      description: 'Vieni a scoprire le attività della Protezione Civile e come diventare volontario.',
      link: '/attivita/giornata-volontariato',
      colorClass: 'yellow'
    }
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
        <svg className="w-8 h-8 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Eventi e Formazione
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map(event => (
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
      <div className="mt-6 text-center">
        <Link to="/attivita" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition-colors duration-300">
          Vedi tutti gli eventi
        </Link>
      </div>
    </div>
  );
};

export default EventsSection;