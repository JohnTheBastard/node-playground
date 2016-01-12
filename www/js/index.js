var Vector = require( './vector' ).Vector;
Array.prototype.unique = require( './vector' ).unique;

var v = new Vector();

console.log( "v initial ", v );

console.log( v.push(3) );
console.log( v.unshift(2) );
console.log( v.unshift(1) );

console.log("v bigger ", v );
console.log( v.pop() );
console.log( v.shift() );
console.log( "v smaller ", v );


var dupes = [ "John", "John", "Jeff", "Geoff", "John", "George", "Joshua", "Jonathan", "John", "Josh", "Jeff" ];

var noDupes = dupes.unique();
console.log(noDupes);