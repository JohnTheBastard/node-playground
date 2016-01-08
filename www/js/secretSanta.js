var secretSanta_module = {
	secretSanta: function (recipients) {
		var descending = function( left, right) { return left.length - right.length; };
		// Sort recipients by family size, smallest to largest
		recipients = recipients.sort(descending);
		
		
		var count = function(recipients) {
			return recipients.map( (a) => a.length).reduce( (pv, cv) => pv+cv );
		};
		
		var currentFamily = [];
		var exchangeFamily = [];
		var exchanges = {};
		var leftovers = [];
		
		while ( count(recipient) > 3 ) {
			// Get the largest unmatched family
			currentFamily = recipients.pop();
			
			// Get members of the next biggest families to exchange with
			while( exchangeFamily.length < currentFamily.length ) {
				
				// If we have leftovers from a previous iteration, use them
				while( leftover.length > 0 ) {
					exchangeFamily.push(leftovers.pop());
				}
				
				exchangeFamily = exchangeFamily.concat( recipients.pop() );
			} 
			
			// if we pulled in too many family members, save the leftovers for the next iteration
			while ( exchangeFamily.length > currentFamily.length) {
				leftovers.push( exchangeFamily.pop() );
			}
			
			// assert( exchangeFamily.length = currentFamily.length );
			
			for ( var ii = 0; ii < currentFamily.length; ii++ ) {
				exchanges[ currentFamily[ii] ] = exchangeFamily[ii];
				exchanges[ exchangeFamily[ii] ] = currentFamily[ (ii+1) % currentFamily.length ];
			}
			
			// we're done with these, so get ready for next iteration
			currentFamily = [];
			exchangeFamily = [];
		}
		
		// assert( count(recipient) < 4 )
		
		
		
		return count(recipients);
		
		
	}
};

module.exports = secretSanta_module;