// src/components/alerts/AlertBadge.js
import React from 'react';

/**
 * Componente che mostra un badge del livello di allerta
 * 
 * @param {Object} props
 * @param {string} props.level - Livello dell'allerta (red, orange, yellow, green)
 * @param {boolean} props.showLabel - Se mostrare l'etichetta testuale del livello
 * @param {string} props.size - Dimensione del badge ('sm', 'md', 'lg')
 * @param {string} props.className - Classi CSS aggiuntive
 */
const AlertBadge = ({ level = 'green', showLabel = true, size = 'md', className = '' }) => {
  // Configurazione per i diversi livelli di allerta
  const alertConfig = {
    red: {
      color: 'bg-red-600',
      text: 'text-white',
      label: 'Allerta Rossa',
      border: 'border-red-700',
      hover: 'hover:bg-red-700',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      )
    },
    orange: {
      color: 'bg-orange-500',
      text: 'text-white',
      label: 'Allerta Arancione',
      border: 'border-orange-600',
      hover: 'hover:bg-orange-600',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
        </svg>
      )
    },
    yellow: {
      color: 'bg-yellow-400',
      text: 'text-yellow-900',
      label: 'Allerta Gialla',
      border: 'border-yellow-500',
      hover: 'hover:bg-yellow-500',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v7h-2zm0 9h2v2h-2z"/>
        </svg>
      )
    },
    green: {
      color: 'bg-green-500',
      text: 'text-white',
      label: 'Monitoraggio',
      border: 'border-green-600',
      hover: 'hover:bg-green-600',
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-11h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      )
    }
  };

  // Ottieni la configurazione per il livello specificato o usa il livello verde come fallback
  const config = alertConfig[level] || alertConfig.green;

  // Configurazione delle dimensioni
  const sizeClasses = {
    sm: {
      badge: 'h-6 text-xs',
      icon: 'w-3 h-3',
      padding: 'px-2',
      spacing: 'space-x-1'
    },
    md: {
      badge: 'h-8 text-sm',
      icon: 'w-4 h-4',
      padding: 'px-3',
      spacing: 'space-x-2'
    },
    lg: {
      badge: 'h-10 text-base',
      icon: 'w-5 h-5',
      padding: 'px-4',
      spacing: 'space-x-2'
    }
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`
      inline-flex items-center rounded-full ${config.color} ${config.text} 
      ${currentSize.badge} ${currentSize.padding} ${config.hover} transition-colors duration-200
      ${className}
    `}>
      <div className={currentSize.icon}>
        {config.icon}
      </div>
      
      {showLabel && (
        <span className={`font-medium ${currentSize.spacing}`}>
          {config.label}
        </span>
      )}
    </div>
  );
};

export default AlertBadge;