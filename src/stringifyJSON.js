// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var rslt = [];
  var type = Object.prototype.toString.call(obj).slice(8, -1);
  var isFuncOrUndefined = function(obj) {
    return typeof obj === "undefined" || typeof obj === "function";
  };

  if (type === "Array") {
    for (var i = 0; i < obj.length; i++) {
      if (!isFuncOrUndefined(obj[i]))
        rslt.push(stringifyJSON(obj[i]));
    }
    return "[" + rslt.join(",") + "]";
  } else if (type === "Object") {
    for (var prop in obj) {
      if (!isFuncOrUndefined(obj[prop])) {
        rslt.push(stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]));
      }
    }
    return "{" + rslt.join(",") + "}";
  } else if (type === "String") {
    return '"' + obj + '"';
  } else {
    if (!isFuncOrUndefined(obj)) {
      return String(obj);
    }
  }
};
