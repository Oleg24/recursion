// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, root){
  // your code here
  var elements = [];

  var root = root || document.body;

  var findClassInDom = function(node){
  	if(node.classList && node.classList.contains(className))
  		elements.push(node);


	for(var i=0; i<node.childNodes.length;i++){
 		findClassInDom(node.childNodes[i])
 	}
 }
 	findClassInDom(root);

 	return elements;
  	}
  
