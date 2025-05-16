// src/components/common/PlaceholderImage.js
import React from 'react';

/**
 * Componente per generare immagini placeholder statiche
 * Questo evita dipendenze da servizi esterni che potrebbero essere instabili
 */
const PlaceholderImage = ({ 
  width = 600, 
  height = 200, 
  text = '', 
  bgColor = '#0077cc', 
  textColor = '#ffffff',
  className = '' 
}) => {
  // Genera un id univoco per evitare conflitti SVG
  const id = `placeholder-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div 
      className={`overflow-hidden ${className}`}
      style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {/* Pattern di sfondo */}
      <svg 
        width="100%" 
        height="100%" 
        xmlns="http://www.w3.org/2000/svg" 
        style={{ position: 'absolute', top: 0, left: 0, opacity: 0.1 }}
      >
        <defs>
          <pattern id={id} patternUnits="userSpaceOnUse" width="50" height="50" patternTransform="rotate(45)">
            <rect width="100%" height="100%" fill={bgColor} />
            <circle cx="25" cy="25" r="10" fill={textColor} opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      
      {/* Testo centrale */}
      {text && (
        <div 
          style={{ 
            color: textColor, 
            fontWeight: 'bold', 
            textAlign: 'center',
            padding: '1rem',
            zIndex: 10,
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
          }}
        >
          {text}
        </div>
      )}
      
      {/* Dimensioni nascoste */}
      <div style={{ display: 'none' }}>{width}x{height}</div>
    </div>
  );
};

export default PlaceholderImage;