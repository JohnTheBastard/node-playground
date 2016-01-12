var Vector = require( './vector' ).Vector;
Array.prototype.unique = require( './vector' ).unique;

var v = new Vector();


v.push(3);
v.push(2);
v.unshift(1);
v.unshift(0);

var popped = v.pop();
//console.log("popped: ", popped );
//console.log( "pop 2: ", v );

var shifted = v.shift();
//console.log( "shifted: ", shifted );
//console.log( "shift 0: ", v );


var dupes = [ "John", "John", "Jeff", "Geoff", 
			  "John", "George", "Joshua", 
			  "Jonathan", "John", "Josh", "Jeff" ];
			  
//console.log(dupes.sort());

var noDupes = dupes.unique();
//console.log(noDupes);