import React from 'react';
import { Link } from 'react-router-dom';
import ContactInfo from '../common/ContactInfo';
import AlertBanner from '../common/AlertBanner';

const InfoSidebar = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-100 transform transition-all duration-300 hover:shadow-xl">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-4 px-6">
          <h3 className="text-xl font-bold text-white">Informazioni Utili</h3>
        </div>
        <div className="p-6">
          <ContactInfo />
        </div>
        
        <div className="px-6 pb-6">
          <Link to="/contatti" className="block w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition-colors duration-300">
            Contattaci
          </Link>
        </div>
      </div>
      
      {/* Sezione Allerta Meteo */}
      <div className="mt-8">
        <AlertBanner />
      </div>
    </div>
  );
};

export default InfoSidebar;