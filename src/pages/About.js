import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
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
          <div className="h-56 bg-cover bg-center" style={{backgroundImage: "url('https://via.placeholder.com/800x400')"}}></div>
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
          <div className="h-56 bg-cover bg-center" style={{backgroundImage: "url('https://via.placeholder.com/800x400')"}}></div>
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
            <div className="h-48 bg-gray-200" style={{backgroundImage: "url('https://via.placeholder.com/300x300')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg mb-1">Mario Rossi</h3>
              <p className="text-blue-600 text-sm mb-2">Coordinatore</p>
              <p className="text-gray-600 text-sm">Con noi dal 1998, Mario coordina tutte le attività del gruppo.</p>
            </div>
          </div>
          
          {/* Membro 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300">
            <div className="h-48 bg-gray-200" style={{backgroundImage: "url('https://via.placeholder.com/300x300')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg mb-1">Laura Bianchi</h3>
              <p className="text-blue-600 text-sm mb-2">Responsabile Formazione</p>
              <p className="text-gray-600 text-sm">Laura si occupa dei corsi di formazione per volontari e cittadini.</p>
            </div>
          </div>
          
          {/* Membro 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300">
            <div className="h-48 bg-gray-200" style={{backgroundImage: "url('https://via.placeholder.com/300x300')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg mb-1">Giovanni Verdi</h3>
              <p className="text-blue-600 text-sm mb-2">Responsabile Logistica</p>
              <p className="text-gray-600 text-sm">Giovanni coordina i mezzi e le attrezzature del gruppo.</p>
            </div>
          </div>
          
          {/* Membro 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:shadow-lg transition-all duration-300">
            <div className="h-48 bg-gray-200" style={{backgroundImage: "url('https://via.placeholder.com/300x300')", backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
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