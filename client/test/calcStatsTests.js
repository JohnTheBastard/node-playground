'use strict';
const assert = require( 'chai' ).assert;
const calcStats = require( '../my_modules/calcStats' ).calcStats;

let testSequence = [0, 1, -10, 7, -5, -8, 2, 4, 3, 8, 10, 12 ];


describe( 'tests CalcStats methods', function() {
    it( 'should return correct min', function(){
		assert( calcStats(testSequence).min === -10 );
    });
    it( 'should return correct max', function(){
		assert( calcStats(testSequence).max === 12 );
    });
    it( 'should return correct count', function(){
		assert( calcStats(testSequence).count === testSequence.length );
    });
        it( 'should return correct mean', function(){
		assert( calcStats(testSequence).mean === 2 );
    });
});
