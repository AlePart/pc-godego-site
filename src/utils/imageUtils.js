// src/utils/imageUtils.js
/**
 * Utility per la gestione delle immagini nel progetto
 * Questo file contiene funzioni per creare e lavorare con immagini placeholder
 * e gestire possibili errori di caricamento.
 */

/**
 * Genera un pattern SVG per utilizzarlo come sfondo
 * @param {string} baseColor - Il colore base del pattern (es. '#1e40af')
 * @param {string} accent - Il colore dell'accento (es. '#ffffff')
 * @param {number} opacity - L'opacità dell'accento (0-1)
 * @returns {string} - URL data per il pattern SVG
 */
export const generatePatternBg = (baseColor = '#1e40af', accent = '#ffffff', opacity = 0.1) => {
  const encodedPattern = `
    <svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
      <g fill='${accent}' fill-opacity='${opacity}'>
        <path d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z'>
        </path>
      </g>
    </svg>
  `.trim().replace(/\s+/g, ' ').replace(/> </g, '><');

  return `url("data:image/svg+xml,${encodeURIComponent(encodedPattern)}")`;
};

/**
 * Genera un colore casuale in formato esadecimale
 * @returns {string} - Codice colore esadecimale (es. '#ff5500')
 */
export const getRandomColor = () => {
  // Array di colori predefiniti adatti al tema del sito
  const colors = [
    '#1e40af', // blue-800
    '#1d4ed8', // blue-700
    '#2563eb', // blue-600
    '#3b82f6', // blue-500
    '#0f766e', // teal-700
    '#059669', // emerald-600
    '#65a30d', // lime-600
    '#ca8a04', // yellow-600
    '#ea580c', // orange-600
    '#dc2626', // red-600
    '#9333ea', // purple-600
    '#2563eb', // indigo-600
  ];
  
  return colors[Math.floor(Math.random() * colors.length)];
};

/**
 * Dimensioni per immagini responsive
 * Utilizza queste dimensioni per mantenere consistenza nel sito
 */
export const imageSizes = {
  thumbnail: { width: 100, height: 100 },
  small: { width: 300, height: 200 },
  medium: { width: 600, height: 400 },
  large: { width: 800, height: 500 },
  banner: { width: 1200, height: 400 },
  profile: { width: 300, height: 300 },
  card: { width: 600, height: 200 }
};

/**
 * Gestisce gli errori di caricamento delle immagini e applica l'immagine di fallback
 * @param {Event} e - Evento error dell'immagine
 * @param {string} altText - Testo alternativo da mostrare
 */
export const handleImageError = (e, altText = '') => {
  // Nasconde l'immagine che ha causato l'errore
  e.target.style.display = 'none';
  
  // Ottiene il genitore dell'immagine
  const parent = e.target.parentNode;
  
  // Crea un div per il segnaposto
  const placeholder = document.createElement('div');
  placeholder.className = 'w-full h-full flex items-center justify-center';
  placeholder.style.backgroundColor = getRandomColor();
  placeholder.style.backgroundImage = generatePatternBg();
  placeholder.style.backgroundBlendMode = 'overlay';
  
  // Aggiunge il testo
  const textElement = document.createElement('div');
  textElement.className = 'text-white font-semibold px-4 py-2 text-center';
  textElement.style.textShadow = '1px 1px 3px rgba(0,0,0,0.3)';
  textElement.innerText = altText || 'Immagine non disponibile';
  
  // Assembla il segnaposto
  placeholder.appendChild(textElement);
  parent.appendChild(placeholder);
};

export default {
  generatePatternBg,
  getRandomColor,
  imageSizes,
  handleImageError
};