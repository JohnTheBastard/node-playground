'use strict';
let assert = require( 'chai' ).assert;
const bowling = require( '../my_modules/bowling' );
const lookAndSay = require( '../my_modules/lookAndSay' ).lookAndSay;


describe( 'Test lookAndSay output ', function() {
	it( 'should produce correct output for known inputs', function(){
		assert( lookAndSay(1, 6) === "13112221" ); 
		assert( lookAndSay(1, 4) === "111221" );
		assert( lookAndSay(1, 2) === "21" );
		assert( lookAndSay(22, 500) === "22" );
		assert( lookAndSay("11122339112", 5) === "13211311222113311213111213122119121113222112" );
		assert( lookAndSay("333222110", 2) ===     "33222110" );
		assert( lookAndSay("333222110", 3) ===     "23322110" );
		assert( lookAndSay("333222110", 4) ===   "1223222110" );
		assert( lookAndSay("333222110", 5) === "112213322110" );
	});

});

