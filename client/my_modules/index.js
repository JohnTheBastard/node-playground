'use strict';

let score = require( './bowling' ).score;

// 6+6+6+6+6+6+6+6+6+6 = 60
let badGame = "33 33 33 33 33 33 33 33 33 33";

// 10x30 = 300
let perfect = "X X X X X X X X X XXX";

// 5+19+9+5+19+9+9+9+1+10 = 95
let noStrikes = "23 -/ 9- 5- 8/ 9- 9- 81 1- 4/-";

// 20+20+15+5+19+9+19+9+1+20 = 137
let harder = "X -/ X 5- 8/ 9- X 81 1- X4/";
// 20+20+15+5+19+9+19+9+1+20 = 137
let sheet1 = "X -/ X 5- 8/ 9- X 81 1- 4/X";

// 8+9+19+9+20+23+18+8+9+18 = 140
let sheet2 = "62 71 X 9- 8/ X X 35 72 5/8";




console.log( " 54+6  ?== ", score(badGame) );
console.log( "270+30 ?== ", score(perfect) );
console.log( " 85+10 ?== ", score(noStrikes) );
console.log( "117+20 ?== ", score(harder) );
console.log( "117+20 ?== ", score(sheet1) );
console.log( "122+18 ?== ", score(sheet2) );