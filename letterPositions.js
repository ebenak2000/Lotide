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
  
  // Function to assert arrays are equal
  const assertArraysEqual = function(arr1, arr2) {
    const message = eqArrays(arr1, arr2)
      ? "Assertion passed: Arrays are equal"
      : "Assertion Failed: Arrays are not equal";
  
    console.log(message);
  };
  
  // Implementing letterPositions function
  const letterPositions = function(sentence) {
    const results = {};
  
    for (let i = 0; i < sentence.length; i++) {
      const letter = sentence[i];
  
      if (letter !== ' ') {
        if (results[letter]) {
          results[letter].push(i);
        } else {
          results[letter] = [i];
        }
      }
    }
  
    return results;
  };
  
  // Test case
  const result = letterPositions("hello");
  
  // Testing with assertArraysEqual
  assertArraysEqual(result['h'], [0]);
  assertArraysEqual(result['e'], [1]);
  assertArraysEqual(result['l'], [2, 3]);
  assertArraysEqual(result['o'], [4]);