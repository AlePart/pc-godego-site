import React, { useEffect, useState } from 'react';
import { loadFacebookSDK } from '../../utils/facebookSDK';

const FacebookFeed = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadSDK = async () => {
      await loadFacebookSDK();
      setLoading(false);
    };
    
    loadSDK();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-100 transform transition-all duration-300 hover:shadow-xl">
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-4 px-6">
        <h3 className="text-xl font-bold text-white flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
          </svg>
          Aggiornamenti Facebook
        </h3>
      </div>
      <div className="p-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 bg-blue-50 rounded-lg border-2 border-dashed border-blue-200">
            <div className="w-16 h-16 border-t-4 border-b-4 border-blue-600 rounded-full animate-spin mb-4"></div>
            <p className="text-blue-600 font-medium">Caricamento degli aggiornamenti...</p>
          </div>
        ) : (
          <div className="fb-page" 
            data-href="https://www.facebook.com/protezionecivilecastellodigodego" 
            data-tabs="timeline" 
            data-width="500" 
            data-height="600" 
            data-small-header="false" 
            data-adapt-container-width="true" 
            data-hide-cover="false" 
            data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/protezionecivilecastellodigodego" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/protezionecivilecastellodigodego">Protezione Civile Castello di Godego</a>
            </blockquote>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacebookFeed;