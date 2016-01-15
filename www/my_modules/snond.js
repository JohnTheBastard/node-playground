var fs = require('fs');
var enable1 = require('path').join( __dirname, 'text/enable1.txt' );
var dictionary = fs.readFileSync( enable1, 'utf-8' ).toString().split('\r\n');

var snond = function ( secret, bad ) {
	var secretArray = secret.split("");
	var problemLetters = bad.split("");
	var subSecret = secretArray.filter( (c) => ( problemLetters.indexOf(c) > -1 ) ).join("");
	return ( subSecret === bad );
};
var probCount = function (bad) { return dictionary.filter( (w) => snond(w, bad) ).length; };

var snond_module = {
	snond: snond,
	problemCount: probCount
};

module.exports = snond_module;