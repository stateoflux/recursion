// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var rslt = [];
  var type = Object.prototype.toString.call(obj).slice(8, -1);

  if (type === "Array") {
    for (var i = 0; i < obj.length; i++) {
      rslt.push(stringifyJSON(obj[i]));
    }
    return "[" + rslt.join(",") + "]";
  } else if (type === "Object") {
    for (var prop in obj) {
      rslt.push(stringifyJSON(prop) + ":" + stringifyJSON(obj[prop]));
    }
    return "{" + rslt.join(",") + "}";
  } else if (type === "String") {
    return '"' + obj + '"';
  } else {
    if (typeof obj !== "function") {
      return String(obj);
    }
  }
};
