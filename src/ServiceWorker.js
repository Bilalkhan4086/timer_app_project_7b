export default function ServiceWorker(){
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          let swfile = `${process.env.PUBLIC_URL}/SW.js`
          navigator.serviceWorker.register(swfile).then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
          });
        });
      }
}