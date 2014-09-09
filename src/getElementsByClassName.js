// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var root = document.body;

	var nodes = [];

	var getNodesWithClass = function (node){
		if(node.classList && node.classList.contains(className)){
			nodes.push(node);
		}
		for(var i = 0; i<node.childNodes.length; i++){
			var child = node.childNodes[i];
			getNodesWithClass(child);
		}
	}
	getNodesWithClass(root);

	return nodes; 
}