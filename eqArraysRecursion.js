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
      if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
        // If items are arrays, compare them using recursive call to eqArrays
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      } else if (arr1[i] !== arr2[i]) {
        // If items are not arrays, compare them using ===
        return false;
      }
    }
  
    return true;
  };
  
  // Test cases
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); 
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
  
  // Additional test cases
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  assertEqual(eqArrays([[[1]], [[2]]], [[[1]], [[2]]]), true);