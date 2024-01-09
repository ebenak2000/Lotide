const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`Assertion passed: ${actual} === ${expected}`);
    } else {
      console.log(`Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  
    return true;
  };
  
  const assertArraysEqual = function(arr1, arr2) {
    const message = eqArrays(arr1, arr2)
      ? "Assertion passed: Arrays are equal"
      : "Assertion Failed: Arrays are not equal";
  
    console.log(message);
  };
  
  const without = function(source, itemsToRemove) {
    const filteredArray = source.filter(item => !itemsToRemove.includes(item));
    return filteredArray;
  };
  
  // Test cases
  const words = ["hello", "world", "lighthouse"];
  
  // Test case for not modifying the original array
  without(words, ["lighthouse"]);
  assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Should print "Assertion passed: Arrays are equal"
  
  // Other test cases
  assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // Should print "Assertion passed: Arrays are equal"
  assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // Should print "Assertion passed: Arrays are equal"
  assertArraysEqual(without(["a", "b", "c"], ["b"]), ["a", "c"]); // Should print "Assertion passed: Arrays are equal"