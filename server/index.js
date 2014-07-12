var express = require('express');

var bodyParser = require('body-parser');

// create our app
var app = express();

app.use(bodyParser());
app.use(require('method-override')());

app.get('/', function(req, res) {

    res.redirect('/squares');
    
});

app.get('/squares', function(req, res) {

    var response = [];

    for (var x = 1; x < 100; x++) {
        response.push({x: x, square: x * x});
    }

    res.json(response);
});

app.listen(3001);
console.log('listen 3001');