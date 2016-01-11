var normalize_module = {
	normalize: function (dates) {
	
	var space = ' ';
	var slash = '/';
	var hyphen = "-";
					  
	// Still need to pad with leading zeros
	var output = dates.map( (d) => new Date(d) )
					  .map( (d) => d.getFullYear() + hyphen +
								  (d.getMonth() +1) + hyphen + 
								   d.getDate() );		  
	return output;
	}
};

module.exports = normalize_module;