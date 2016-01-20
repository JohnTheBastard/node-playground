const assert = require( 'chai' ).assert;
const magicFruit = require( '../my_modules/magicFruit' ).magicFruit;

describe( 'Magic Fruit Iterator tests', function() {
    it( 'should return correct values', function(){
		assert( 5  === magicFruit( 15, 1 ) );
		assert( 5  === magicFruit( 200, 15 ) );
		assert( 14 === magicFruit( 50000, 1 ) ) ;
		assert( 9  === magicFruit( 150000, 250 ) );
	});
});