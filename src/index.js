import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import ProtezioneCivileApp from './App';

// Configurazione per GitHub Pages (basename)
const basename = process.env.PUBLIC_URL || '';

let rootElement = document.getElementById('root');
if (!rootElement) {
  rootElement = document.createElement('div');
  rootElement.id = 'root';
  document.body.appendChild(rootElement);
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ProtezioneCivileApp basename={basename} />
  </React.StrictMode>
);