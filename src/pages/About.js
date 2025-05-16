// src/pages/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import PlaceholderImage from '../components/common/PlaceholderImage';

const About = () => {
  // Funzione per generare pattern di sfondo
  const generatePatternBg = (color = '#1e40af') => {
    return `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`;
  };

  return (
    <div className="container mx-auto p-6 md:p-8">
      {/* Header della sezione */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Chi Siamo</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          La Protezione Civile di Castello di Godego è un gruppo di volontari impegnati nella prevenzione e 
          nella gestione delle emergenze sul territorio comunale.
        </p>
      </div>
      
      {/* Storia e Missione */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300">
          <div className="h-56 bg-blue-600" style={{backgroundImage: generatePatternBg(), backgroundBlendMode: 'overlay'}}>
            <div className="h-full w-full flex items-center justify-center text-white font-bold text-xl">
              La Nostra Storia
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">La Nostra Storia</h2>
            <p className="text-gray-600 mb-4">
              Fondata nel 1998, la Protezione Civile di Castello di Godego è nata dall'iniziativa di un gruppo di cittadini volenterosi 
              che hanno deciso di mettere a disposizione il proprio tempo per la sicurezza della comunità. Nel corso degli anni, 
              il gruppo è cresciuto fino a diventare un punto di riferimento importante per il territorio.
            </p>
            <p className="text-gray-600">
              In oltre 25 anni di attività, abbiamo partecipato a numerose operazioni di soccorso sia a livello locale che nazionale, 
              dimostrando professionalità, dedizione e spirito di sacrificio.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300">
          <div className="h-56 bg-green-600" style={{backgroundImage: generatePatternBg('#15803d'), backgroundBlendMode: 'overlay'}}>
            <div className="h-full w-full flex items-center justify-center text-white font-bold text-xl">
              La Nostra Missione
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">La Nostra Missione</h2>
            <p className="text-gray-600 mb-4">
              La missione della Protezione Civile di Castello di Godego è quella di garantire la sicurezza del territorio e dei cittadini 
              attraverso attività di prevenzione, monitoraggio e intervento in caso di emergenze e calamità naturali.
            </p>
            <p className="text-gray-600">
              Ci impegniamo ogni giorno per:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
              <li>Prevenire i rischi sul territorio</li>
              <li>Formare i cittadini sulla cultura della sicurezza</li>
              <li>Intervenire prontamente in caso di emergenze</li>
              <li>Supportare le autorità locali nella gestione delle criticità</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Il Nostro Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Il Nostro Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Membro 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300">
            <div className="h-48 bg-blue-100 flex items-center justify-center">
              <svg className="w-24 h-24 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg mb-1">Mario Rossi</h3>
              <p className="text-blue-600 text-sm mb-2">Coordinatore</p>
              <p className="text-gray-600 text-sm">Con noi dal 1998, Mario coordina tutte le attività del gruppo.</p>
            </div>
          </div>
          
          {/* Membro 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300">
            <div className="h-48 bg-red-100 flex items-center justify-center">
              <svg className="w-24 h-24 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg mb-1">Laura Bianchi</h3>
              <p className="text-blue-600 text-sm mb-2">Responsabile Formazione</p>
              <p className="text-gray-600 text-sm">Laura si occupa dei corsi di formazione per volontari e cittadini.</p>
            </div>
          </div>
          
          {/* Membro 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300">
            <div className="h-48 bg-green-100 flex items-center justify-center">
              <svg className="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg mb-1">Giovanni Verdi</h3>
              <p className="text-blue-600 text-sm mb-2">Responsabile Logistica</p>
              <p className="text-gray-600 text-sm">Giovanni coordina i mezzi e le attrezzature del gruppo.</p>
            </div>
          </div>
          
          {/* Membro 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300">
            <div className="h-48 bg-yellow-100 flex items-center justify-center">
              <svg className="w-24 h-24 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg mb-1">Anna Neri</h3>
              <p className="text-blue-600 text-sm mb-2">Responsabile Comunicazione</p>
              <p className="text-gray-600 text-sm">Anna gestisce i rapporti con i media e la comunicazione esterna.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Diventa Volontario */}
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Vuoi unirti a noi?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          La Protezione Civile di Castello di Godego è sempre alla ricerca di nuovi volontari. 
          Se hai a cuore la sicurezza della tua comunità e vuoi metterti in gioco, contattaci!
        </p>
        <Link to="/contatti" className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold rounded-md shadow-md transition-colors duration-300 transform hover:scale-105">
          Diventa Volontario
        </Link>
      </div>
    </div>
  );
};

export default About;