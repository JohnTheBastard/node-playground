"use strict";
let assert = require( 'chai' ).assert;
const bowling = require( '../my_modules/bowling' );

let badGame = "33 33 33 33 33 33 33 33 33 33";         // 6+6+6+6+6+6+6+6+6+6 = 60
let perfect = "X X X X X X X X X XXX";                 // 30x10 = 300
let noStrikes = "23 -/ 9- 5- 8/ 9- 9- 81 1- 4/-";      // 5+19+9+5+19+9+9+9+1+10 = 95
let spareOnLastThrow = "X -/ X 5- 8/ 9- X 81 1- X4/";  // 20+20+15+5+19+9+19+9+1+20 = 137
let strikeOnLastThrow = "X -/ X 5- 8/ 9- X 81 1- 4/X"; // 20+20+15+5+19+9+19+9+1+20 = 137
let penultimateSpare = "62 71 X 9- 8/ X X 35 72 5/8";  // 8+9+19+9+20+23+18+8+9+18 = 140

describe( 'bowling.score method should accurately calculate bowling scores ', function() {
	it( 'should work on games with no spares or strikes', function(){
		assert( bowling.score(badGame) === 60); });

	it( 'should work on a perfect game', function(){
		assert( bowling.score(perfect) === 300); });
	
	it( 'should work when the final throw is a spare', function(){
		assert( bowling.score(spareOnLastThrow) === 137); });
	
	it( 'should work when the final throw is a strike', function(){
		assert( bowling.score(strikeOnLastThrow) === 137); });
	
	it( 'should work when the last frame has a spare but no strike', function(){
		assert( bowling.score(penultimateSpare) === 140); });
});

