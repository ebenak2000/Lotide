const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  const length = array.length;

  if (length <= 2) {
    return [];
  }

  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[middleIndex]];
  }
};
module.exports = middle;