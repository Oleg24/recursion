// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
 	var newObj = {};

 	var convertToJSON = function(obj,replacer){
 		var newObj = {}
 		for(var key in obj){
 			newObj[key] = obj[key].toString();
 			var key = key.toString();
 		}
 		return newObj;
 	}

};
