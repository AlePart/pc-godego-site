// src/pages/About.js (sezione aggiornata)
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  // Funzione per generare pattern di sfondo
  const generatePatternBg = (color = '#1e40af') => {
    return `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`;
  };

  // La sezione Il Nostro Team con avatar personalizzati
  const teamMembers = [
    {
      name: "Mario Rossi",
      role: "Coordinatore",
      description: "Con noi dal 1998, Mario coordina tutte le attività del gruppo.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-500"
    },
    {
      name: "Laura Bianchi",
      role: "Responsabile Formazione",
      description: "Laura si occupa dei corsi di formazione per volontari e cittadini.",
      bgColor: "bg-red-100",
      textColor: "text-red-500"
    },
    {
      name: "Giovanni Verdi",
      role: "Responsabile Logistica",
      description: "Giovanni coordina i mezzi e le attrezzature del gruppo.",
      bgColor: "bg-green-100",
      textColor: "text-green-500"
    },
    {
      name: "Anna Neri",
      role: "Responsabile Comunicazione",
      description: "Anna gestisce i rapporti con i media e la comunicazione esterna.",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-500"
    }
  ];

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
            <div className="h-full w-full flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <svg className="w-16 h-16 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-white text-xl font-bold text-center mt-2">La Nostra Storia</h3>
              </div>
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
            <div className="h-full w-full flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <svg className="w-16 h-16 mx-auto text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-white text-xl font-bold text-center mt-2">La Nostra Missione</h3>
              </div>
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
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300">
              <div className={`h-48 ${member.bgColor} flex items-center justify-center`}>
                <div className="relative">
                  <svg className={`w-24 h-24 ${member.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-80 rounded-full p-2">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
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