'use strict';

const score = require( './bowling' ).score;

let badGame = '33 33 33 33 33 33 33 33 33 33';
let perfect = 'X X X X X X X X X XXX';
let noStrikes = '23 -/ 9- 5- 8/ 9- 9- 81 1- 4/-';
let harder = 'X -/ X 5- 8/ 9- X 81 1- X4/';
let sheet1 = 'X -/ X 5- 8/ 9- X 81 1- 4/X';
let sheet2 = '62 71 X 9- 8/ X X 35 72 5/8';

console.log( ' 54+6  ?== ', score(badGame) );
console.log( '270+30 ?== ', score(perfect) );
console.log( ' 85+10 ?== ', score(noStrikes) );
console.log( '117+20 ?== ', score(harder) );
console.log( '117+20 ?== ', score(sheet1) );
console.log( '122+18 ?== ', score(sheet2) );