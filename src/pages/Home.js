/**
 * Utility per il caricamento del Facebook SDK
 */

export const loadFacebookSDK = () => {
  return new Promise((resolve) => {
    // Se l'SDK è già stato caricato
    if (window.FB) {
      resolve();
      return;
    }

    // Inizializzazione di Facebook SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v18.0'
      });
      resolve();
    };

    // Caricamento dello script SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/it_IT/sdk.js";
      js.onload = function() {
        // SDK è stato caricato ma potrebbe non essere ancora inizializzato
        if (!window.FB) {
          // Attendiamo fbAsyncInit
          const checkFB = setInterval(() => {
            if (window.FB) {
              clearInterval(checkFB);
              resolve();
            }
          }, 100);
        } else {
          resolve();
        }
      };
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
};

export default loadFacebookSDK;