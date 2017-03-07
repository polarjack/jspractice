Array.prototype.concatAll = function() {
	var results = [];
	this.forEach(function(subArray) {
		subArray.forEach((i) => {
      results.push(i);
    });
	});

	return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array
