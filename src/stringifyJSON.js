// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var jsonString = [];
  // if undefined return undefined
  if(obj === undefined){
  	return undefined;
  }
  //if null return null
  if(obj === null){
  	return 'null';
  }
  // return the string version of number, boolean, string (primative data types).
  // Composite data types we will have to break down further --- see below.
  if(typeof(obj)==='number'){
  	return obj.toString();
  }
  if(typeof(obj)=== 'boolean'){
  	return obj.toString();
  }
  if(typeof(obj) === 'string'){
  	return "'"+obj+"'";
  }
  /* if the obj is an array we will go through each item in the array and push the 
  result of running the stringifyJSON on each value -- this is the recursive part.  
  */
  if(typeof(obj)==='object' && Array.isArray(obj)){
  	for(var i=0; i<obj.length;i++){
  		jsonString.push(stringifyJSON(obj[i]));
  	}
  	return '['+jsonString.join(',')+']';
  };
  /* if the obj is an object we use similar logic */
  if(typeof(obj)==='object'  && !Array.isArray(obj)){
  	for(var key in obj){
  		var objResult = stringifyJSON(obj[key]);
  		jsonString.push('"'+key+'"'+':'+objResult);
  	}
  	return '{'+jsonString+'}';
  }
  return jsonString;
};
