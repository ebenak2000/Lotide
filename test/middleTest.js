const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test cases for middle function
assertArraysEqual(middle([1, 2, 3]), [2]); // Example usage, you can add more test cases
// ...

// Additional test cases using assertArraysEqual
assertArraysEqual(middle([1, 2, 3]), [1, 2, 3]); // Should print "Assertion Failed: Arrays are not equal"
assertArraysEqual(middle(["1", "2", "3"]), ["1", "2", "3"]); // Should print "Assertion passed: Arrays are equal"
// ...