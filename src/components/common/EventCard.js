import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ 
  image = 'https://via.placeholder.com/600/200', 
  date = 'Prossimamente', 
  title = 'Evento',
  description = 'Descrizione evento',
  link = '#',
  colorClass = 'blue'
}) => {
  const colorVariants = {
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    red: 'bg-red-100 text-red-800',
    purple: 'bg-purple-100 text-purple-800'
  };

  const bgColorVariants = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    yellow: 'bg-yellow-600',
    red: 'bg-red-600',
    purple: 'bg-purple-600'
  };

  const badgeColorClass = colorVariants[colorClass] || colorVariants.blue;
  const bgColorClass = bgColorVariants[colorClass] || bgColorVariants.blue;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-100 hover:shadow-lg transition-shadow duration-300">
      <div className={`h-32 ${bgColorClass}`} style={{backgroundImage: `url('${image}')`, backgroundSize: 'cover'}}></div>
      <div className="p-4">
        <span className={`inline-block px-2 py-1 ${badgeColorClass} text-xs font-semibold rounded-md mb-2`}>{date}</span>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        {link.startsWith('/') ? (
          <Link to={link} className="text-blue-600 hover:text-blue-800 text-sm font-medium">Scopri di più →</Link>
        ) : (
          <a href={link} className="text-blue-600 hover:text-blue-800 text-sm font-medium">Scopri di più →</a>
        )}
      </div>
    </div>
  );
};

export default EventCard;