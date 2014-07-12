var requestify = require('requestify'); 
requestify.get('http://localhost:3001/squares').then(function(response) {
    // Get the response body
    console.log(response.getBody());
});