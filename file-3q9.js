// Handle the redirect from Spotify Accounts Service
function handleRedirect() {
  var hash = window.location.hash;
  var token = hash.substring(1).split('&')[0].split('=')[1];

  // Use the access token
  // ...
}

// Initialize the page
handleRedirect();