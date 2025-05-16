// src/components/common/EventCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import PlaceholderImage from './PlaceholderImage';

const EventCard = ({ 
  image = null, 
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
      <div className={`h-32 ${bgColorClass}`}>
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              // In caso di errore, sostituisci con PlaceholderImage
              e.target.style.display = 'none';
              const parent = e.target.parentNode;
              // Crea dinamicamente un placeholder in caso di errore
              const placeholder = document.createElement('div');
              placeholder.className = 'w-full h-full';
              parent.appendChild(placeholder);
              // Renderizza il componente placeholder (versione semplificata)
              parent.style.backgroundColor = getComputedStyle(parent).backgroundColor;
              parent.innerHTML = `<div class="h-full w-full flex items-center justify-center text-white font-semibold">${title}</div>`;
            }}
          />
        ) : (
          <PlaceholderImage 
            width={600} 
            height={200} 
            text={title}
            bgColor={window.getComputedStyle(document.documentElement).getPropertyValue(`--${colorClass}-600`) || '#4a90e2'}
          />
        )}
      </div>
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