// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:

var walkTheDOM = function(node, func) {
  var children = node.childNodes;

  func(node);

  for (var i = 0; i < children.length; i++) {
    walkTheDOM(children[i], func);
  }
};

var getElementsByClassName = function (className) {
  var results = [];

  if (typeof className !== 'string') {
    throw new TypeError('className must be a string');
  }
  walkTheDOM(document.body, function(node) {
    if (node.nodeType === 1) {
      for (var i = 0; i < node.classList.length; i++) {
        if (node.classList[i] === className) {
          results.push(node);
        }
      }
    }
  });
  return results;
};
