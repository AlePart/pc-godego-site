import React, { useState, useEffect } from 'react';

// Immagine di fallback incorporata direttamente come SVG
const FallbackImage = () => (
  <div className="bg-gray-200 rounded-md w-full h-48 flex items-center justify-center">
    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  </div>
);

const FacebookFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Placeholder in caso di errore o mentre carica
  const placeholderPosts = [
    {
      id: 1,
      date: '15 maggio 2025 alle 16:30',
      content: 'Oggi si è svolta l\'esercitazione annuale presso il campo sportivo comunale. Grazie a tutti i volontari che hanno partecipato!',
      image: null
    },
    {
      id: 2,
      date: '10 maggio 2025 alle 11:15',
      content: '⚠️ ALLERTA METEO ⚠️\nSi prevede maltempo intenso nelle prossime 24 ore. Si consiglia di evitare spostamenti non necessari e di prestare attenzione a possibili allagamenti.',
      image: null
    },
    {
      id: 3,
      date: '5 maggio 2025 alle 18:45',
      content: '📢 Avviso: Il prossimo corso base per volontari inizierà il 1° giugno. Per info e iscrizioni, contattare la segreteria al numero 0423-123456 o via email a protcivile.godego@esempio.it',
      image: null
    }
  ];

  useEffect(() => {
    // Funzione per formattare la data
    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      const date = new Date(dateString);
      return date.toLocaleDateString('it-IT', options).replace(' ore ', ' alle ');
    };

    // Funzione per recuperare i post
    const fetchPosts = async () => {
      try {
        setLoading(true);
        
        // Utilizza Facebook Graph API attraverso un proxy per evitare problemi CORS
        // Nota: questo richiede un token di accesso valido e potrebbe necessitare di implementazione sul backend
        const pageId = 'protezionecivilecastellodigodego';
        const accessToken = 'YOUR_ACCESS_TOKEN'; // Dovresti gestire questo sul backend per sicurezza
        const apiUrl = `https://graph.facebook.com/v18.0/${pageId}/posts?fields=message,created_time,full_picture,permalink_url&limit=5&access_token=${accessToken}`;
        
        // Prova a recuperare i post reali, se fallisce usa i placeholder
        try {
          const proxyUrl = 'https://corsproxy.io/?'; // Un proxy CORS pubblico (solo per test)
          const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
          const data = await response.json();
          
          if (data.data && Array.isArray(data.data)) {
            // Trasforma i dati nel formato desiderato
            const formattedPosts = data.data.map(post => ({
              id: post.id,
              date: formatDate(post.created_time),
              content: post.message || '',
              image: post.full_picture || null,
              url: post.permalink_url
            }));
            
            setPosts(formattedPosts);
          } else {
            throw new Error('Formato dati non valido');
          }
        } catch (apiError) {
          console.warn('Non è stato possibile recuperare i post reali, uso i placeholder', apiError);
          // Se non riesce a recuperare i post reali, usa i placeholder
          setPosts(placeholderPosts);
        }
        
        setLoading(false);
      } catch (err) {
        console.error('Errore durante il recupero dei post:', err);
        setError('Non è stato possibile caricare gli aggiornamenti Facebook.');
        setPosts(placeholderPosts); // Mostra comunque i placeholder in caso di errore
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-blue-100 transform transition-all duration-300 hover:shadow-xl">
      {/* Header del componente */}
      <div className="bg-[#1877f2] py-4 px-6">
        <h3 className="text-xl font-bold text-white flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
          </svg>
          Aggiornamenti Facebook
        </h3>
      </div>

      <div className="p-0">
        {/* Header della pagina Facebook */}
        <div className="border-b border-gray-200 p-4 flex items-center">
          <div className="w-12 h-12 bg-[#1877f2] rounded-full flex items-center justify-center text-white font-bold mr-3">
            PC
          </div>
          <div>
            <h4 className="font-bold">Protezione Civile Castello di Godego</h4>
            <p className="text-xs text-gray-500">Pagina Facebook</p>
          </div>
        </div>

        {/* Stato di caricamento */}
        {loading ? (
          <div className="p-6 text-center">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-gray-600">Caricamento aggiornamenti...</p>
          </div>
        ) : error ? (
          <div className="p-6 text-center text-red-600">
            <p>{error}</p>
            <a 
              href="https://www.facebook.com/protezionecivilecastellodigodego" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#1877f2] hover:underline font-medium block mt-2"
            >
              Visita la nostra pagina Facebook
            </a>
          </div>
        ) : (
          <>
            {/* Contenitore scrollabile dei post */}
            <div className="overflow-y-auto max-h-[600px]">
              {posts.map(post => (
                <div key={post.id} className="border-b border-gray-200 p-4">
                  {/* Data del post */}
                  <div className="text-xs text-gray-500 mb-2">{post.date}</div>
                  
                  {/* Contenuto del post */}
                  <div className="mb-4">
                    <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
                  </div>
                  
                  {/* Immagine del post (se presente) */}
                  {post.image ? (
                    <div className="mb-4">
                      <img 
                        src={post.image} 
                        alt="Immagine post" 
                        className="w-full rounded-md"
                        onError={(e) => {
                          // Nascondi l'immagine in caso di errore e mostra il componente di fallback
                          e.target.style.display = 'none';
                          const fallbackEl = document.createElement('div');
                          fallbackEl.className = 'bg-gray-200 rounded-md w-full h-48 flex items-center justify-center';
                          fallbackEl.innerHTML = `
                            <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          `;
                          e.target.parentNode.appendChild(fallbackEl);
                        }}
                      />
                    </div>
                  ) : null}
                  
                  
                </div>
              ))}
            </div>
            
            {/* Footer con link alla pagina Facebook */}
            <div className="p-4 text-center border-t border-gray-200">
              <a 
                href="https://www.facebook.com/protezionecivilecastellodigodego" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#1877f2] hover:underline font-medium"
              >
                Vedi tutti gli aggiornamenti su Facebook →
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FacebookFeed;