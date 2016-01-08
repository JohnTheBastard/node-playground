var assert = require( 'chai' ).assert;
var findLongest = require( '../www/js/findLongestPalindrome' ).findLongestPalindrome;

describe( 'longest palindrome', () => {
	it( 'finds simple palindrome', () => {
       assert.equal( findLongest( 'xabacd' ), 'aba' );
    });     
    
	it( 'finds longer palindrome', () => {
		assert.equal( findLongest( 'xdabadcd' ), 'dabad' );
	});  

	it( 'finds palindrome with double pivot', () => {
		assert.equal( findLongest( 'xabbacd' ), 'abba' );
	});    

	it( 'finds longest palindrome when there are more than one', () => {
		assert.equal( findLongest( 'drracxcabbbcd' ), 'acxca' );
	});  

	it( 'finds palindrome that contains other palindromes', () => {
		assert.equal( findLongest( 'dacabacax' ), 'acabaca' );
	});

	it( 'finds overlapping palindrome that is longer', () => {
		assert.equal( findLongest( 'xabacab' ), 'bacab' );
	});

});