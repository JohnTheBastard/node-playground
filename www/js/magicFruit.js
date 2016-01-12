var Tree = function() {
	var self = this;
	self.init = function() { self.age = 1; };
	self.fruit = function() { return self.age - 1; };
	self.grow = function() { self.age += 1; };
	self.init();
};

var MagicFruit_module = {
	MagicFruit: function (population, startingFruit) {
		var self = this;
		self.orchard = [];

		var sow = function(fruit) { 
			for( var ii = 0; ii < fruit; ii++ ) {
				self.orchard.push( new Tree() ); 
				// console.log( self.orchard[ self.orchard.length - 1].fruit() );
			}
		};
		var wait = function() { 
			self.orchard.forEach( tree => tree.grow() ); 
			self.week++; 
		};
		var harvest = function() {			
			return self.orchard.reduce( ( (sum, tree) => sum + tree.fruit() ), 0 ); 
		};

		self.init = function() {
			sow( startingFruit );
			self.week = 1;
			self.harvest = 0;
		};
		
		var mainLoop = function() {
			var fruit = 0;
			while ( self.orchard.length < population ) {
				wait();
				fruit = harvest(); 
				//console.log("week: ", self.week, ", fruit: ", fruit );
				sow( fruit );
			}
			return self.week;
		};
			
		self.init();
		return mainLoop();
		//return;
	}
};

module.exports = MagicFruit_module;