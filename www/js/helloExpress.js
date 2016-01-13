var express = require('express');
var app = express();

// GET method route
app.get('/', function (req, res) {
	res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
	res.send('POST request to the homepage');
});

app.put('/user', function (req, res) {
	res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
	res.send('Got a DELETE request at /user');
});

// regex route path, matches butterfly, dragonfly, etc.
app.get(/.*fly$/, function(req, res) {
	res.send('/.*fly$/');
});

// not true regex...
// The characters ?, +, *, and () are subsets of their regular expression 
// counterparts. The hyphen (-) and the dot (.) are interpreted literally 
// by string-based paths.
app.get('/*bug', function(req, res) {
	res.send('*bug');
});

// will this work? (yep)
app.get(/swat\/all\/.*flies$/, function(req, res) {
	res.send('/swat\/all\/.*flies$/');
});

app.all('/secret', function (req, res, next) {
	console.log('Accessing the secret section ...');
	next(); // pass control to the next handler
});

var cb0 = function (req, res, next) {
	console.log('CB0');
	next();
};

var cb1 = function (req, res, next) {
	console.log('CB1');
	next();
};

var cb2 = function (req, res) {
	console.log('CB2');
	res.send('Hello from C!');
};

app.get('/example/c', [cb0, cb1, cb2]);

app.get('/example/d', [cb0, cb1], function (req, res, next) {
		console.log('the response will be sent by the next function ...');
		next();
}, function (req, res) { res.send('Hello from D!'); });

// class example, capture from URL
var pets = [ { type: 'cat', name: 'felix' } ];
function handlePets(req, res){
    res.send([ req.params.type, req.params.name ].join(" ") );
}
app.get( '/pets/:type', handlePets);
app.get( '/pets/:type/owner/:name', handlePets);


app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});