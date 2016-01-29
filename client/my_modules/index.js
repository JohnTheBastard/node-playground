'use strict';

let lookAndSay = require( './lookAndSay' ).lookAndSay;

/*
function pad(s, size) {
    while (s.length < size) s = " " + s;
    return s;
}

let s = "333222110";
let outputs = ["0", s];
for(let ii = 2; ii <= 15; ii++) {
	outputs.push( lookAndSay(s, ii) );
}

let len = outputs[ outputs.length-1].length;

outputs = outputs.map((s, ii) => pad(ii.toString(), 2) + ": " + pad(s, len));

for (var jj = 0; jj < outputs.length; jj+=2 ) {
	console.log( outputs[jj] );
}

for (var jj = 1; jj < outputs.length; jj+=2 ) {
	console.log( outputs[jj] );
}
*/

let s = "9999999998888888877777776666665555544443332210"; 
let n = 1;

console.log( lookAndSay(s, n) );