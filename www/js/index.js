var Vector = require( './vector' ).Vector;
Array.prototype.unique = require( './vector' ).unique;

var v = new Vector();

console.log( "v initial ", v );

v.push(3);
console.log( "push 3: ", v );
v.push(2);
console.log( "push 2: ", v );
v.unshift(1);
console.log( "unshift 1: ", v );
v.unshift(0);
console.log( "unshift 0: ", v );

var popped = v.pop();
console.log("popped: ", popped );
console.log( "pop 2: ", v );

var shifted = v.shift();
console.log( "shifted: ", shifted );
console.log( "shift 0: ", v );


var dupes = [ "John", "John", "Jeff", "Geoff", 
			  "John", "George", "Joshua", 
			  "Jonathan", "John", "Josh", "Jeff" ];

var noDupes = dupes.unique();
//console.log(noDupes);