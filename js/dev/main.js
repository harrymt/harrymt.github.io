
(function() {

  if('serviceWorker' in navigator) {
    console.log("Service worker is in navigator");
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(function(registration) {
            console.log('Service Worker Registered');
    }).catch(function(error) {
      console.log('Registration failed with ' + error);
    });
    navigator.serviceWorker.ready.then(function(registration) {
       console.log('Service Worker Ready');
    });
  }
})();
