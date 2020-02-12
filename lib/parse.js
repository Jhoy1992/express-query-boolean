"use strict";
/* jshint latedef: nofunc */
/* NOTE: this is because of the recursive nature of the functions here
    we must be able to call parseObject from inside parseValue,
    if the value is an object
*/

/**
 * Convert string to null.
 * @param  {String}  string  - String to convert
 * @return {?}  Returns the results of the conversion.
 */
function parseNullFromString(string) {
  if (string === "null") {
    return null;
  } else {
    return string;
  }
}

/**
 * Recursively test values for conversion.
 * @param  {?}  value  - String to convert
 * @return {?}  Returns the results of the conversion.
 */
function parseValue(value) {
  if (typeof value === "string") {
    return parseNullFromString(value);
  } else if (value.constructor === Object) {
    return parseObject(value);
  } else if (Array.isArray(value)) {
    var array = [];
    value.forEach(function(item, itemKey) {
      array[itemKey] = parseValue(item);
    });
    return array;
  } else {
    return value;
  }
}

/**
 * Recursively convert object strings to null.
 * @param  {Object}  obj  - Object to iterate over
 * @return {Object}  Returns new object (shallow copy).
 */
function parseObject(obj) {
  var result = {},
    key,
    value;

  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      value = obj[key];
      result[key] = parseValue(value);
    }
  }

  return result;
}

module.exports = parseObject;