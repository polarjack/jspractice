Array.prototype.map = function(projectionFunction) {
  var reuslts = [];
  this.forEach(function(itemInArray){
    results.push(projectionFunction(itemInArray));
  })
  return results;
}
