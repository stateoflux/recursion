// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var rslt = [];

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      rslt.push(stringifyJSON(obj[i]));
    }
    return "[" + rslt.join(",") + "]";
  } else if (Object.prototype.toString.call(obj).slice(8, -1) === "Object") {
    for (var prop in obj) {
      rslt.push(prop.toString() + ": " + stringifyJSON(obj[prop]));
    }
    return "{" + rslt.join(",") + "}";
  } else {
    return String(obj);
  }
};
