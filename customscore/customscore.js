var _ = require('underscore')

// Generated by CoffeeScript 1.6.3
var __slice = [].slice;

_.protract = function() {
var name, names, obj;
obj = arguments[0], name = arguments[1], names = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
console.log(obj);
if (name === void 0) {
  return obj;
} else {
  if (obj === void 0) {
    return void 0;
  } else {
    return _.protract.apply({}, [obj[name]].concat(names));
  }
}
};

_.streamToString = function(stream, callback) {
var input;
input = '';
stream.on('data', function(chunk) {
  return input += chunk.toString();
});
return stream.on('end', function() {
  return callback(input);
});
};

module.exports = _