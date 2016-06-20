self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    if (self.clients && clients.claim) {
        clients.claim();
    }
});

self.addEventListener('sync', function(event) {
  console.log('firing: sync');
  if (event.tag == 'sync-data') {
    console.log('sync event fired');
    event.waitUntil(doSomeStuff());
  }
});

function doSomeStuff()
{
  console.log('firing: doSomeStuff()');
  fetch('./doge.png')
    .then(function(response) {
      return response;
    })
    .then(function(text) {
      console.log('Request successful', text);
    })
    .catch(function(error) {
      console.log('Request failed', error);
    });
}
