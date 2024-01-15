const assertEqual = require('./assertEqual');

const headFunction = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

module.exports = headFunction;

assertEqual(headFunction([5, 6, 7]), 5);
assertEqual(headFunction(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(headFunction([1]), 1);
assertEqual(headFunction([]), undefined);