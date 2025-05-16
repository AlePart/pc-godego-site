import React, { useState } from 'react';
import ContactInfo from '../components/common/ContactInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Rimuovi l'errore quando l'utente inizia a digitare
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Il nome è obbligatorio';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Formato email non valido';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'L\'oggetto è obbligatorio';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Il messaggio è obbligatorio';
    }
    
    if (!formData.privacy) {
      errors.privacy = 'Devi accettare la privacy policy';
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Simulazione di invio del modulo
    setSubmitStatus('sending');
    
    // Simuliamo una chiamata API
    setTimeout(() => {
      setSubmitStatus('success');
      // Reset del form dopo l'invio
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false
      });
    }, 1500);
  };
  
  return (
    <div className="container mx-auto p-6 md:p-8">
      {/* Header della sezione */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Contattaci</h1>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Hai domande o vuoi diventare volontario? Contattaci utilizzando il modulo qui sotto 
          oppure attraverso i nostri recapiti diretti.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Colonna Info Contatti */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-4 px-6">
              <h3 className="text-xl font-bold text-white">I Nostri Contatti</h3>
            </div>
            <div className="p-6">
              <ContactInfo />
            </div>
          </div>
          
          {/* Mappa */}
          <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-4 px-6">
              <h3 className="text-xl font-bold text-white">Dove Siamo</h3>
            </div>
            <div className="h-72 bg-gray-200">
              {/* Qui si potrebbe integrare una mappa Google Maps */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600">Visualizzazione mappa</p>
                  <p className="text-sm text-gray-500">Via Roma, 123 - Castello di Godego (TV)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Colonna Form Contatti */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-4 px-6">
              <h3 className="text-xl font-bold text-white">Inviaci un Messaggio</h3>
            </div>
            <div className="p-6">
              {submitStatus === 'success' ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                  <strong className="font-bold">Messaggio inviato!</strong>
                  <p className="block sm:inline">Grazie per averci contattato. Ti risponderemo al più presto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome e Cognome *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Oggetto *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Messaggio *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.message ? 'border-red-500' : 'border-gray-300'}`}
                    ></textarea>
                    {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="privacy"
                          name="privacy"
                          type="checkbox"
                          checked={formData.privacy}
                          onChange={handleChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="privacy" className={`font-medium ${formErrors.privacy ? 'text-red-500' : 'text-gray-700'}`}>
                          Acconsento al trattamento dei dati personali *
                        </label>
                        <p className="text-gray-500">I tuoi dati saranno trattati secondo la nostra privacy policy.</p>
                        {formErrors.privacy && <p className="text-red-500 text-sm mt-1">{formErrors.privacy}</p>}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={submitStatus === 'sending'}
                      className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition-colors duration-300 flex items-center justify-center"
                    >
                      {submitStatus === 'sending' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Invio in corso...
                        </>
                      ) : (
                        'Invia messaggio'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Domande Frequenti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-lg text-blue-800 mb-2">Come posso diventare volontario?</h3>
            <p className="text-gray-600">
              Per diventare volontario è necessario compilare il modulo di iscrizione e partecipare al corso base di formazione. 
              Contattaci per avere maggiori informazioni.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-lg text-blue-800 mb-2">Quali sono i requisiti per essere volontario?</h3>
            <p className="text-gray-600">
              Per diventare volontario è necessario essere maggiorenni, residenti o domiciliati nel comune o in zone limitrofe, 
              e godere di buona salute.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-lg text-blue-800 mb-2">Come si attiva la Protezione Civile in caso di emergenza?</h3>
            <p className="text-gray-600">
              In caso di emergenza, la Protezione Civile viene attivata dal Sindaco o dalle autorità competenti. 
              Per segnalazioni, contattare il numero unico di emergenza 112.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-lg text-blue-800 mb-2">Quali attività svolge la Protezione Civile?</h3>
            <p className="text-gray-600">
              Le attività principali sono: prevenzione dei rischi, formazione, interventi in caso di emergenze, 
              esercitazioni e sensibilizzazione della popolazione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;