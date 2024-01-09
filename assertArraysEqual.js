const assertArraysEqual = function(arr1, arr2) {
  const message = eqArrays(arr1, arr2)
    ? "Assertion passed: Arrays are equal"
    : "Assertion Failed: Arrays are not equal";

  console.log(message);
};

// Example usage:
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Should print "Assertion passed: Arrays are equal"
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Should print "Assertion Failed: Arrays are not equal"
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Should print "Assertion passed: Arrays are equal"
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Should print "Assertion Failed: Arrays are not equal"