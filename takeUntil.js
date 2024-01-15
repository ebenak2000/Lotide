// Helper function: assertArraysEqual
const assertArraysEqual = function(actual, expected) {
    const message = eqArrays(actual, expected)
      ? "Assertion passed: Arrays are equal"
      : "Assertion Failed: Arrays are not equal";
  
    console.log(message);
  };
  
  // Helper function: eqArrays
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
  
  // Function: takeUntil
  const takeUntil = function(array, callback) {
    const result = [];
    for (const item of array) {
      // Stop collecting items if the callback returns a truthy value
      if (callback(item)) {
        break;
      }
      // Collect the current item
      result.push(item);
    }
    return result;
  };
  
  // Test Case 1
  const numbersData = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const numbersResult = takeUntil(numbersData, x => x < 0);
  assertArraysEqual(numbersResult, [1, 2, 5, 7, 2]);
  
  // Test Case 2
  const wordsData = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const wordsResult = takeUntil(wordsData, x => x === ',');
  assertArraysEqual(wordsResult, ["I've", "been", "to", "Hollywood"]);
  
  // Test Case 3
  const emptyArrayData = [];
  const emptyArrayResult = takeUntil(emptyArrayData, x => x > 10);
  assertArraysEqual(emptyArrayResult, []);